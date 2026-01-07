/* This file was automatically generated. DO NOT UPDATE MANUALLY. */

import { DateTimeResolver } from 'graphql-scalars'
import { Author } from './author/resolvers/Author'
import { author as Query_author } from './author/resolvers/Query/author'
import { Book } from './book/resolvers/Book'
import { markBookAsRead as Mutation_markBookAsRead } from './book/resolvers/Mutation/markBookAsRead'
import { book as Query_book } from './book/resolvers/Query/book'
import type { Resolvers } from './types.generated'
import { user as Query_user } from './user/resolvers/Query/user'
import { User } from './user/resolvers/User'
export const resolvers: Resolvers = {
  Query: { author: Query_author, book: Query_book, user: Query_user },
  Mutation: { markBookAsRead: Mutation_markBookAsRead },

  Author: Author,
  Book: Book,
  User: User,
  DateTime: DateTimeResolver,
}
