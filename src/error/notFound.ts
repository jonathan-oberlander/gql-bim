import { GraphQLError, type GraphQLErrorExtensions } from 'graphql'
import type { Maybe } from 'graphql-yoga'

export class NotFoundError extends GraphQLError {
  constructor(
    message: string,
    extensions?: Maybe<GraphQLErrorExtensions>,
    customHeaders?: Record<string, string>,
  ) {
    super(message, {
      extensions: {
        code: 'NOT_FOUND',
        ...extensions,
        http: {
          status: 404,
          headers: {
            ...customHeaders,
          },
        },
      },
    })

    // Ensures the instance name shows up correctly in logs
    this.name = 'NotFoundGraphQLError'
  }
}
