import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './schema/resolvers.generated'
import { typeDefs } from './schema/typeDefs.generated'

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
})

const server = createServer(yoga)

server.listen(3000)
