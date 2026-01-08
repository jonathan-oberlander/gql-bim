import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    'src/schema': defineConfig({
      typesPluginsConfig: {
        contextType: '../server#GraphQLSchemaWithContext',
      },
    }),
  },
}

export default config
