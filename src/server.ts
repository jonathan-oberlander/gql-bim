import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './schema/resolvers.generated'
import { typeDefs } from './schema/typeDefs.generated'

export interface GraphQLContext {
  customerId: string | null
}

const yoga = createYoga<object, GraphQLContext>({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/graphql',
  landingPage: false,
  context: async ({ request }) => {
    const customerId = request.headers.get('x-customer-id')
    return { customerId }
  },
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000')
})
