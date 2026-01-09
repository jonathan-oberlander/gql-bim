import { studios as allStudios } from '../../../../db/schema'
import type { QueryResolvers } from './../../../types.generated'

export const studios: NonNullable<QueryResolvers['studios']> = async (
  _,
  __,
  { db },
) => await db.select().from(allStudios)
