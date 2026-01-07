import type { QueryResolvers } from './../../../types.generated'
export const book: NonNullable<QueryResolvers['book']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const greeting = await fetch('http://localhost:9876/greeting').then((res) =>
    res.json(),
  )

  return greeting
}
