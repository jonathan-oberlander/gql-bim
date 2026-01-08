import { useGraphQlJit } from '@envelop/graphql-jit'
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection'
import {
  type FastifyBaseLogger,
  type FastifyReply,
  type FastifyRequest,
  fastify,
} from 'fastify'
import {
  createSchema,
  createYoga,
  useExecutionCancellation,
  type YogaInitialContext,
} from 'graphql-yoga'
import { resolvers } from './schema/resolvers.generated'
import { typeDefs } from './schema/typeDefs.generated'

export interface ServerContext {
  req: FastifyRequest
  reply: FastifyReply
}

export interface GraphQLContext {
  customerId: string | string[] | undefined
  log: FastifyBaseLogger
}

type GraphQLSchemaWithContext = ServerContext &
  GraphQLContext &
  YogaInitialContext

export function buildApp(logging = true) {
  const app = fastify({
    logger: logging && {
      transport: {
        target: 'pino-pretty',
      },
      level: 'debug',
    },
  })

  const graphQLServer = createYoga<ServerContext, GraphQLContext>({
    landingPage: false,
    graphqlEndpoint: '/graphql',
    plugins: [
      useGraphQlJit(),
      useExecutionCancellation(),
      useDisableIntrospection(),
    ],
    schema: createSchema<GraphQLSchemaWithContext>({ typeDefs, resolvers }),
    logging: {
      debug: (...args) => {
        for (const arg of args) app.log.debug(arg)
      },
      info: (...args) => {
        for (const arg of args) app.log.info(arg)
      },
      warn: (...args) => {
        for (const arg of args) app.log.warn(arg)
      },
      error: (...args) => {
        for (const arg of args) app.log.error(arg)
      },
    },
    context: async ({ req }) => {
      const customerId = req.headers['x-customer-id']

      return {
        customerId,
        log: req.log,
      }
    },
  })

  // Important: Yoga needs to handle multipart for file uploads
  app.addContentTypeParser('multipart/form-data', {}, (_, __, done) =>
    done(null),
  )

  const url = graphQLServer.graphqlEndpoint

  app.route({
    url,
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      const response = await graphQLServer.handleNodeRequestAndResponse(
        req,
        reply,
        { req, reply },
      )

      // Manually move headers from Yoga to Fastify
      response.headers.forEach((value, key) => {
        reply.header(key, value)
      })

      reply.status(response.status)

      // reply.send can accept a ReadableStream,
      // this avoids loading the whole response into a string.
      return reply.send(response.body)
    },
  })

  return [app, url] as const
}
