import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import type { GraphQLContext } from '../server'
import type { UserMapper } from './user/schema.mappers'
export type Maybe<T> = T | null | undefined
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: Date | string; output: Date | string }
}

export type Author = {
  __typename?: 'Author'
  firstName: Scalars['String']['output']
  id: Scalars['ID']['output']
  isPenName: Scalars['Boolean']['output']
  lastName: Scalars['String']['output']
}

export type Book = {
  __typename?: 'Book'
  genre: Scalars['String']['output']
  id: Scalars['ID']['output']
  isbn: Scalars['String']['output']
  name: Scalars['String']['output']
  read: Scalars['Boolean']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  markBookAsRead: Book
}

export type MutationmarkBookAsReadArgs = {
  id: Scalars['ID']['input']
}

export type Query = {
  __typename?: 'Query'
  author?: Maybe<Author>
  book?: Maybe<Book>
  user?: Maybe<User>
}

export type QueryauthorArgs = {
  id: Scalars['ID']['input']
}

export type QuerybookArgs = {
  id: Scalars['ID']['input']
}

export type QueryuserArgs = {
  id: Scalars['ID']['input']
}

export type User = {
  __typename?: 'User'
  fullName: Scalars['String']['output']
  id: Scalars['ID']['output']
  isAdmin: Scalars['Boolean']['output']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<
  TResult,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<
  TTypes,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<
  T = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = Record<PropertyKey, never>,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Book: ResolverTypeWrapper<Book>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>
  User: ResolverTypeWrapper<UserMapper>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author
  String: Scalars['String']['output']
  ID: Scalars['ID']['output']
  Boolean: Scalars['Boolean']['output']
  Book: Book
  DateTime: Scalars['DateTime']['output']
  Mutation: Record<PropertyKey, never>
  Query: Record<PropertyKey, never>
  User: UserMapper
}

export type AuthorResolvers<
  ContextType = GraphQLContext,
  ParentType extends
    ResolversParentTypes['Author'] = ResolversParentTypes['Author'],
> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isPenName?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type BookResolvers<
  ContextType = GraphQLContext,
  ParentType extends
    ResolversParentTypes['Book'] = ResolversParentTypes['Book'],
> = {
  genre?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isbn?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type MutationResolvers<
  ContextType = GraphQLContext,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  markBookAsRead?: Resolver<
    ResolversTypes['Book'],
    ParentType,
    ContextType,
    RequireFields<MutationmarkBookAsReadArgs, 'id'>
  >
}

export type QueryResolvers<
  ContextType = GraphQLContext,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  author?: Resolver<
    Maybe<ResolversTypes['Author']>,
    ParentType,
    ContextType,
    RequireFields<QueryauthorArgs, 'id'>
  >
  book?: Resolver<
    Maybe<ResolversTypes['Book']>,
    ParentType,
    ContextType,
    RequireFields<QuerybookArgs, 'id'>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id'>
  >
}

export type UserResolvers<
  ContextType = GraphQLContext,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}

export type Resolvers<ContextType = GraphQLContext> = {
  Author?: AuthorResolvers<ContextType>
  Book?: BookResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
}
