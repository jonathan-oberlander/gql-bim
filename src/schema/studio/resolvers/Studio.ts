import { eq } from 'drizzle-orm'
import { classes, employees } from '../../../db/schema'
import type {
  ResolverTypeWrapper,
  StudioResolvers,
} from './../../types.generated'
import type { StudioMapper } from '../schema.mappers'

export const Studio: StudioResolvers = {
  classes: async ({ id }, { limit = 50, offset = 0 }, { db }) => {
    return await db
      .select()
      .from(classes)
      .where(eq(classes.studioId, parseInt(id.toString(), 10)))
      .limit(limit ?? Infinity)
      .offset(offset ?? 0)
  },
  employees: async ({ id }, { limit = 50, offset = 0 }, { db }) => {
    const out = await db
      .select()
      .from(employees)
      .where(eq(employees.studioId, parseInt(id.toString(), 10)))
      .limit(limit ?? Infinity)
      .offset(offset ?? 0)

    // weird
    return out.map((d) => ({
      ...d,
      studio: {} as ResolverTypeWrapper<StudioMapper>,
    }))
  },
}
