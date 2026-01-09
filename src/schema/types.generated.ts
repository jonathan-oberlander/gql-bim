import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import type { GraphQLSchemaWithContext } from '../server'
import type { StudioMapper } from './studio/schema.mappers'
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues
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
  Date: { input: Date | string; output: Date | string }
  DateTime: { input: Date | string; output: Date | string }
}

export type BillingPeriod = 'MONTH' | 'YEAR'

export type Booking = {
  __typename?: 'Booking'
  bookingDatetime: Scalars['DateTime']['output']
  class: Class
  id: Scalars['ID']['output']
  paymentStatus: PaymentStatus
  planUsage?: Maybe<PlanUsage>
  source: BookingSource
  status: BookingStatus
  student: Student
}

export type BookingSource = 'APP' | 'STAFF' | 'WEB'

export type BookingStatus =
  | 'ATTENDED'
  | 'BOOKED'
  | 'CANCELLED'
  | 'NO_SHOW'
  | 'WAITLISTED'

export type Class = {
  __typename?: 'Class'
  attendees: Array<Student>
  bookings: Array<Booking>
  capacity: Scalars['Int']['output']
  description?: Maybe<Scalars['String']['output']>
  endDatetime: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  instructor: Instructor
  level?: Maybe<ClassLevel>
  name: Scalars['String']['output']
  price: Scalars['Float']['output']
  startDatetime: Scalars['DateTime']['output']
  status: ClassStatus
  studio: Studio
}

export type ClassattendeesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type ClassbookingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type ClassLevel = 'ADVANCED' | 'ALL_LEVELS' | 'BEGINNER' | 'INTERMEDIATE'

export type ClassStatus = 'CANCELLED' | 'COMPLETED' | 'SCHEDULED'

export type CreateBookingInput = {
  classId: Scalars['ID']['input']
  studentId: Scalars['ID']['input']
  usePlanId?: InputMaybe<Scalars['ID']['input']>
}

export type CreatePlanInput = {
  billingPeriod?: InputMaybe<BillingPeriod>
  isRecurring: Scalars['Boolean']['input']
  planName: Scalars['String']['input']
  planType: PlanType
  pricePerPeriod?: InputMaybe<Scalars['Float']['input']>
  startDate: Scalars['Date']['input']
  studentId: Scalars['ID']['input']
  studioId?: InputMaybe<Scalars['ID']['input']>
  totalCredits?: InputMaybe<Scalars['Int']['input']>
}

export type CreateStudentInput = {
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  phone?: InputMaybe<Scalars['String']['input']>
}

export type Employee = {
  __typename?: 'Employee'
  email: Scalars['String']['output']
  firstName: Scalars['String']['output']
  hireDate?: Maybe<Scalars['Date']['output']>
  id: Scalars['ID']['output']
  isActive: Scalars['Boolean']['output']
  lastName: Scalars['String']['output']
  phone?: Maybe<Scalars['String']['output']>
  role: Scalars['String']['output']
  studio: Studio
}

export type Instructor = {
  __typename?: 'Instructor'
  bio?: Maybe<Scalars['String']['output']>
  classes: Array<Class>
  email: Scalars['String']['output']
  firstName: Scalars['String']['output']
  hireDate?: Maybe<Scalars['Date']['output']>
  id: Scalars['ID']['output']
  isActive: Scalars['Boolean']['output']
  lastName: Scalars['String']['output']
  phone?: Maybe<Scalars['String']['output']>
}

export type InstructorclassesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  cancelBooking: Booking
  cancelPlan: Plan
  createBooking: Booking
  createClass: Class
  createPlan: Plan
  createStudent: Student
  markBookingAttended: Booking
  setCookie?: Maybe<Scalars['String']['output']>
  updateClassStatus: Class
}

export type MutationcancelBookingArgs = {
  bookingId: Scalars['ID']['input']
}

export type MutationcancelPlanArgs = {
  planId: Scalars['ID']['input']
}

export type MutationcreateBookingArgs = {
  input: CreateBookingInput
}

export type MutationcreateClassArgs = {
  capacity: Scalars['Int']['input']
  endDatetime: Scalars['DateTime']['input']
  instructorId: Scalars['ID']['input']
  level?: InputMaybe<ClassLevel>
  name: Scalars['String']['input']
  price: Scalars['Float']['input']
  startDatetime: Scalars['DateTime']['input']
  studioId: Scalars['ID']['input']
}

export type MutationcreatePlanArgs = {
  input: CreatePlanInput
}

export type MutationcreateStudentArgs = {
  input: CreateStudentInput
}

export type MutationmarkBookingAttendedArgs = {
  bookingId: Scalars['ID']['input']
}

export type MutationsetCookieArgs = {
  name: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type MutationupdateClassStatusArgs = {
  classId: Scalars['ID']['input']
  status: ClassStatus
}

export type PaymentStatus = 'PAID' | 'REFUNDED' | 'UNPAID'

export type Plan = {
  __typename?: 'Plan'
  billingPeriod?: Maybe<BillingPeriod>
  endDate?: Maybe<Scalars['Date']['output']>
  id: Scalars['ID']['output']
  isRecurring: Scalars['Boolean']['output']
  planName: Scalars['String']['output']
  planType: PlanType
  pricePerPeriod?: Maybe<Scalars['Float']['output']>
  remainingCredits?: Maybe<Scalars['Int']['output']>
  startDate: Scalars['Date']['output']
  status: PlanStatus
  student: Student
  studio?: Maybe<Studio>
  totalCredits?: Maybe<Scalars['Int']['output']>
  usages: Array<PlanUsage>
}

export type PlanusagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type PlanStatus = 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'PAUSED'

export type PlanType = 'CLASS_PACK' | 'MEMBERSHIP' | 'UNLIMITED'

export type PlanUsage = {
  __typename?: 'PlanUsage'
  booking: Booking
  id: Scalars['ID']['output']
  plan: Plan
  usageDatetime: Scalars['DateTime']['output']
  usedCredits: Scalars['Int']['output']
}

export type Query = {
  __typename?: 'Query'
  booking: Booking
  bookings: Array<Booking>
  class?: Maybe<Class>
  classes: Array<Class>
  cookie?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  instructor?: Maybe<Instructor>
  instructors: Array<Instructor>
  plan: Plan
  plans: Array<Plan>
  student?: Maybe<Student>
  students: Array<Student>
  studio?: Maybe<Studio>
  studios: Array<Studio>
  usageDatetime: Scalars['DateTime']['output']
  usedCredits: Scalars['Int']['output']
}

export type QuerybookingArgs = {
  id: Scalars['ID']['input']
}

export type QuerybookingsArgs = {
  classId?: InputMaybe<Scalars['ID']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<BookingStatus>
  studentId?: InputMaybe<Scalars['ID']['input']>
}

export type QueryclassArgs = {
  id: Scalars['ID']['input']
}

export type QueryclassesArgs = {
  from?: InputMaybe<Scalars['DateTime']['input']>
  instructorId?: InputMaybe<Scalars['ID']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<ClassStatus>
  studioId?: InputMaybe<Scalars['ID']['input']>
  to?: InputMaybe<Scalars['DateTime']['input']>
}

export type QuerycookieArgs = {
  name: Scalars['String']['input']
}

export type QueryinstructorArgs = {
  id: Scalars['ID']['input']
}

export type QueryinstructorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type QueryplanArgs = {
  id: Scalars['ID']['input']
}

export type QueryplansArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<PlanStatus>
  studentId?: InputMaybe<Scalars['ID']['input']>
}

export type QuerystudentArgs = {
  id: Scalars['ID']['input']
}

export type QuerystudentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type QuerystudioArgs = {
  id: Scalars['ID']['input']
}

export type Student = {
  __typename?: 'Student'
  bookings: Array<Booking>
  dateOfBirth?: Maybe<Scalars['Date']['output']>
  email: Scalars['String']['output']
  emergencyContactName?: Maybe<Scalars['String']['output']>
  emergencyContactPhone?: Maybe<Scalars['String']['output']>
  firstName: Scalars['String']['output']
  id: Scalars['ID']['output']
  isActive: Scalars['Boolean']['output']
  lastName: Scalars['String']['output']
  phone?: Maybe<Scalars['String']['output']>
  plans: Array<Plan>
}

export type StudentbookingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type StudentplansArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type Studio = {
  __typename?: 'Studio'
  addressLine1: Scalars['String']['output']
  addressLine2?: Maybe<Scalars['String']['output']>
  city: Scalars['String']['output']
  classes: Array<Class>
  country?: Maybe<Scalars['String']['output']>
  employees: Array<Employee>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  phone?: Maybe<Scalars['String']['output']>
  postcode?: Maybe<Scalars['String']['output']>
}

export type StudioclassesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type StudioemployeesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
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
  BillingPeriod: ResolverTypeWrapper<'MONTH' | 'YEAR'>
  Booking: ResolverTypeWrapper<
    Omit<
      Booking,
      'class' | 'paymentStatus' | 'planUsage' | 'source' | 'status' | 'student'
    > & {
      class: ResolversTypes['Class']
      paymentStatus: ResolversTypes['PaymentStatus']
      planUsage?: Maybe<ResolversTypes['PlanUsage']>
      source: ResolversTypes['BookingSource']
      status: ResolversTypes['BookingStatus']
      student: ResolversTypes['Student']
    }
  >
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  BookingSource: ResolverTypeWrapper<'WEB' | 'APP' | 'STAFF'>
  BookingStatus: ResolverTypeWrapper<
    'BOOKED' | 'WAITLISTED' | 'CANCELLED' | 'ATTENDED' | 'NO_SHOW'
  >
  Class: ResolverTypeWrapper<
    Omit<
      Class,
      'attendees' | 'bookings' | 'instructor' | 'level' | 'status' | 'studio'
    > & {
      attendees: Array<ResolversTypes['Student']>
      bookings: Array<ResolversTypes['Booking']>
      instructor: ResolversTypes['Instructor']
      level?: Maybe<ResolversTypes['ClassLevel']>
      status: ResolversTypes['ClassStatus']
      studio: ResolversTypes['Studio']
    }
  >
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  ClassLevel: ResolverTypeWrapper<
    'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'ALL_LEVELS'
  >
  ClassStatus: ResolverTypeWrapper<'SCHEDULED' | 'CANCELLED' | 'COMPLETED'>
  CreateBookingInput: CreateBookingInput
  CreatePlanInput: CreatePlanInput
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  CreateStudentInput: CreateStudentInput
  Date: ResolverTypeWrapper<Scalars['Date']['output']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  Employee: ResolverTypeWrapper<
    Omit<Employee, 'studio'> & { studio: ResolversTypes['Studio'] }
  >
  Instructor: ResolverTypeWrapper<
    Omit<Instructor, 'classes'> & { classes: Array<ResolversTypes['Class']> }
  >
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>
  PaymentStatus: ResolverTypeWrapper<'UNPAID' | 'PAID' | 'REFUNDED'>
  Plan: ResolverTypeWrapper<
    Omit<
      Plan,
      'billingPeriod' | 'planType' | 'status' | 'student' | 'studio' | 'usages'
    > & {
      billingPeriod?: Maybe<ResolversTypes['BillingPeriod']>
      planType: ResolversTypes['PlanType']
      status: ResolversTypes['PlanStatus']
      student: ResolversTypes['Student']
      studio?: Maybe<ResolversTypes['Studio']>
      usages: Array<ResolversTypes['PlanUsage']>
    }
  >
  PlanStatus: ResolverTypeWrapper<'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED'>
  PlanType: ResolverTypeWrapper<'UNLIMITED' | 'CLASS_PACK' | 'MEMBERSHIP'>
  PlanUsage: ResolverTypeWrapper<
    Omit<PlanUsage, 'booking' | 'plan'> & {
      booking: ResolversTypes['Booking']
      plan: ResolversTypes['Plan']
    }
  >
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>
  Student: ResolverTypeWrapper<
    Omit<Student, 'bookings' | 'plans'> & {
      bookings: Array<ResolversTypes['Booking']>
      plans: Array<ResolversTypes['Plan']>
    }
  >
  Studio: ResolverTypeWrapper<StudioMapper>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Booking: Omit<Booking, 'class' | 'planUsage' | 'student'> & {
    class: ResolversParentTypes['Class']
    planUsage?: Maybe<ResolversParentTypes['PlanUsage']>
    student: ResolversParentTypes['Student']
  }
  ID: Scalars['ID']['output']
  Class: Omit<Class, 'attendees' | 'bookings' | 'instructor' | 'studio'> & {
    attendees: Array<ResolversParentTypes['Student']>
    bookings: Array<ResolversParentTypes['Booking']>
    instructor: ResolversParentTypes['Instructor']
    studio: ResolversParentTypes['Studio']
  }
  Int: Scalars['Int']['output']
  String: Scalars['String']['output']
  Float: Scalars['Float']['output']
  CreateBookingInput: CreateBookingInput
  CreatePlanInput: CreatePlanInput
  Boolean: Scalars['Boolean']['output']
  CreateStudentInput: CreateStudentInput
  Date: Scalars['Date']['output']
  DateTime: Scalars['DateTime']['output']
  Employee: Omit<Employee, 'studio'> & {
    studio: ResolversParentTypes['Studio']
  }
  Instructor: Omit<Instructor, 'classes'> & {
    classes: Array<ResolversParentTypes['Class']>
  }
  Mutation: Record<PropertyKey, never>
  Plan: Omit<Plan, 'student' | 'studio' | 'usages'> & {
    student: ResolversParentTypes['Student']
    studio?: Maybe<ResolversParentTypes['Studio']>
    usages: Array<ResolversParentTypes['PlanUsage']>
  }
  PlanUsage: Omit<PlanUsage, 'booking' | 'plan'> & {
    booking: ResolversParentTypes['Booking']
    plan: ResolversParentTypes['Plan']
  }
  Query: Record<PropertyKey, never>
  Student: Omit<Student, 'bookings' | 'plans'> & {
    bookings: Array<ResolversParentTypes['Booking']>
    plans: Array<ResolversParentTypes['Plan']>
  }
  Studio: StudioMapper
}

export type BillingPeriodResolvers = EnumResolverSignature<
  { MONTH?: any; YEAR?: any },
  ResolversTypes['BillingPeriod']
>

export type BookingResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Booking'] = ResolversParentTypes['Booking'],
> = {
  bookingDatetime?: Resolver<
    ResolversTypes['DateTime'],
    ParentType,
    ContextType
  >
  class?: Resolver<ResolversTypes['Class'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  paymentStatus?: Resolver<
    ResolversTypes['PaymentStatus'],
    ParentType,
    ContextType
  >
  planUsage?: Resolver<
    Maybe<ResolversTypes['PlanUsage']>,
    ParentType,
    ContextType
  >
  source?: Resolver<ResolversTypes['BookingSource'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['BookingStatus'], ParentType, ContextType>
  student?: Resolver<ResolversTypes['Student'], ParentType, ContextType>
}

export type BookingSourceResolvers = EnumResolverSignature<
  { APP?: any; STAFF?: any; WEB?: any },
  ResolversTypes['BookingSource']
>

export type BookingStatusResolvers = EnumResolverSignature<
  {
    ATTENDED?: any
    BOOKED?: any
    CANCELLED?: any
    NO_SHOW?: any
    WAITLISTED?: any
  },
  ResolversTypes['BookingStatus']
>

export type ClassResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Class'] = ResolversParentTypes['Class'],
> = {
  attendees?: Resolver<
    Array<ResolversTypes['Student']>,
    ParentType,
    ContextType,
    Partial<ClassattendeesArgs>
  >
  bookings?: Resolver<
    Array<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    Partial<ClassbookingsArgs>
  >
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  endDatetime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  instructor?: Resolver<ResolversTypes['Instructor'], ParentType, ContextType>
  level?: Resolver<Maybe<ResolversTypes['ClassLevel']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  startDatetime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['ClassStatus'], ParentType, ContextType>
  studio?: Resolver<ResolversTypes['Studio'], ParentType, ContextType>
}

export type ClassLevelResolvers = EnumResolverSignature<
  { ADVANCED?: any; ALL_LEVELS?: any; BEGINNER?: any; INTERMEDIATE?: any },
  ResolversTypes['ClassLevel']
>

export type ClassStatusResolvers = EnumResolverSignature<
  { CANCELLED?: any; COMPLETED?: any; SCHEDULED?: any },
  ResolversTypes['ClassStatus']
>

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type EmployeeResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Employee'] = ResolversParentTypes['Employee'],
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hireDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  studio?: Resolver<ResolversTypes['Studio'], ParentType, ContextType>
}

export type InstructorResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Instructor'] = ResolversParentTypes['Instructor'],
> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  classes?: Resolver<
    Array<ResolversTypes['Class']>,
    ParentType,
    ContextType,
    Partial<InstructorclassesArgs>
  >
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hireDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  cancelBooking?: Resolver<
    ResolversTypes['Booking'],
    ParentType,
    ContextType,
    RequireFields<MutationcancelBookingArgs, 'bookingId'>
  >
  cancelPlan?: Resolver<
    ResolversTypes['Plan'],
    ParentType,
    ContextType,
    RequireFields<MutationcancelPlanArgs, 'planId'>
  >
  createBooking?: Resolver<
    ResolversTypes['Booking'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateBookingArgs, 'input'>
  >
  createClass?: Resolver<
    ResolversTypes['Class'],
    ParentType,
    ContextType,
    RequireFields<
      MutationcreateClassArgs,
      | 'capacity'
      | 'endDatetime'
      | 'instructorId'
      | 'name'
      | 'price'
      | 'startDatetime'
      | 'studioId'
    >
  >
  createPlan?: Resolver<
    ResolversTypes['Plan'],
    ParentType,
    ContextType,
    RequireFields<MutationcreatePlanArgs, 'input'>
  >
  createStudent?: Resolver<
    ResolversTypes['Student'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateStudentArgs, 'input'>
  >
  markBookingAttended?: Resolver<
    ResolversTypes['Booking'],
    ParentType,
    ContextType,
    RequireFields<MutationmarkBookingAttendedArgs, 'bookingId'>
  >
  setCookie?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationsetCookieArgs, 'name' | 'value'>
  >
  updateClassStatus?: Resolver<
    ResolversTypes['Class'],
    ParentType,
    ContextType,
    RequireFields<MutationupdateClassStatusArgs, 'classId' | 'status'>
  >
}

export type PaymentStatusResolvers = EnumResolverSignature<
  { PAID?: any; REFUNDED?: any; UNPAID?: any },
  ResolversTypes['PaymentStatus']
>

export type PlanResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Plan'] = ResolversParentTypes['Plan'],
> = {
  billingPeriod?: Resolver<
    Maybe<ResolversTypes['BillingPeriod']>,
    ParentType,
    ContextType
  >
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isRecurring?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  planName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  planType?: Resolver<ResolversTypes['PlanType'], ParentType, ContextType>
  pricePerPeriod?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  remainingCredits?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['PlanStatus'], ParentType, ContextType>
  student?: Resolver<ResolversTypes['Student'], ParentType, ContextType>
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>
  totalCredits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  usages?: Resolver<
    Array<ResolversTypes['PlanUsage']>,
    ParentType,
    ContextType,
    Partial<PlanusagesArgs>
  >
}

export type PlanStatusResolvers = EnumResolverSignature<
  { ACTIVE?: any; CANCELLED?: any; EXPIRED?: any; PAUSED?: any },
  ResolversTypes['PlanStatus']
>

export type PlanTypeResolvers = EnumResolverSignature<
  { CLASS_PACK?: any; MEMBERSHIP?: any; UNLIMITED?: any },
  ResolversTypes['PlanType']
>

export type PlanUsageResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['PlanUsage'] = ResolversParentTypes['PlanUsage'],
> = {
  booking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  plan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType>
  usageDatetime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  usedCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  booking?: Resolver<
    ResolversTypes['Booking'],
    ParentType,
    ContextType,
    RequireFields<QuerybookingArgs, 'id'>
  >
  bookings?: Resolver<
    Array<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    Partial<QuerybookingsArgs>
  >
  class?: Resolver<
    Maybe<ResolversTypes['Class']>,
    ParentType,
    ContextType,
    RequireFields<QueryclassArgs, 'id'>
  >
  classes?: Resolver<
    Array<ResolversTypes['Class']>,
    ParentType,
    ContextType,
    Partial<QueryclassesArgs>
  >
  cookie?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QuerycookieArgs, 'name'>
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  instructor?: Resolver<
    Maybe<ResolversTypes['Instructor']>,
    ParentType,
    ContextType,
    RequireFields<QueryinstructorArgs, 'id'>
  >
  instructors?: Resolver<
    Array<ResolversTypes['Instructor']>,
    ParentType,
    ContextType,
    Partial<QueryinstructorsArgs>
  >
  plan?: Resolver<
    ResolversTypes['Plan'],
    ParentType,
    ContextType,
    RequireFields<QueryplanArgs, 'id'>
  >
  plans?: Resolver<
    Array<ResolversTypes['Plan']>,
    ParentType,
    ContextType,
    Partial<QueryplansArgs>
  >
  student?: Resolver<
    Maybe<ResolversTypes['Student']>,
    ParentType,
    ContextType,
    RequireFields<QuerystudentArgs, 'id'>
  >
  students?: Resolver<
    Array<ResolversTypes['Student']>,
    ParentType,
    ContextType,
    Partial<QuerystudentsArgs>
  >
  studio?: Resolver<
    Maybe<ResolversTypes['Studio']>,
    ParentType,
    ContextType,
    RequireFields<QuerystudioArgs, 'id'>
  >
  studios?: Resolver<Array<ResolversTypes['Studio']>, ParentType, ContextType>
  usageDatetime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  usedCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}

export type StudentResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Student'] = ResolversParentTypes['Student'],
> = {
  bookings?: Resolver<
    Array<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    Partial<StudentbookingsArgs>
  >
  dateOfBirth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  emergencyContactName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  emergencyContactPhone?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  plans?: Resolver<
    Array<ResolversTypes['Plan']>,
    ParentType,
    ContextType,
    Partial<StudentplansArgs>
  >
}

export type StudioResolvers<
  ContextType = GraphQLSchemaWithContext,
  ParentType extends
    ResolversParentTypes['Studio'] = ResolversParentTypes['Studio'],
> = {
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  addressLine2?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  classes?: Resolver<
    Array<ResolversTypes['Class']>,
    ParentType,
    ContextType,
    Partial<StudioclassesArgs>
  >
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  employees?: Resolver<
    Array<ResolversTypes['Employee']>,
    ParentType,
    ContextType,
    Partial<StudioemployeesArgs>
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type Resolvers<ContextType = GraphQLSchemaWithContext> = {
  BillingPeriod?: BillingPeriodResolvers
  Booking?: BookingResolvers<ContextType>
  BookingSource?: BookingSourceResolvers
  BookingStatus?: BookingStatusResolvers
  Class?: ClassResolvers<ContextType>
  ClassLevel?: ClassLevelResolvers
  ClassStatus?: ClassStatusResolvers
  Date?: GraphQLScalarType
  DateTime?: GraphQLScalarType
  Employee?: EmployeeResolvers<ContextType>
  Instructor?: InstructorResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  PaymentStatus?: PaymentStatusResolvers
  Plan?: PlanResolvers<ContextType>
  PlanStatus?: PlanStatusResolvers
  PlanType?: PlanTypeResolvers
  PlanUsage?: PlanUsageResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Student?: StudentResolvers<ContextType>
  Studio?: StudioResolvers<ContextType>
}
