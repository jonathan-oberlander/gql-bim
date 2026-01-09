import { eq } from 'drizzle-orm'
import { studios as allStudios } from '../../../../db/schema'
import type { QueryResolvers } from './../../../types.generated'

export const studio: NonNullable<QueryResolvers['studio']> = async (
  _,
  { id },
  { db },
) => {
  const [studioRecord] = await db
    .select()
    .from(allStudios)
    .where(eq(allStudios.id, parseInt(id, 10)))

  if (!studioRecord) {
    throw new Error(`Studio not found: ${id}`)
  }

  return studioRecord
}
