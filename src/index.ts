import { buildApp } from './server'

const port = Number(process.env.PORT) || 4000 // provided by the environment
const host = '0.0.0.0' // Necessary for Docker/Cloud environments

const [server, endpoint] = buildApp(true)

server
  .listen({ port, host })
  .then((serverUrl) => {
    server.log.info(`GraphQL API located at ${serverUrl}${endpoint}`)
  })
  .catch((err) => {
    server.log.error(err)
    process.exit(1)
  })
