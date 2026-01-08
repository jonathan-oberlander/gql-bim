import type { QueryResolvers } from './../../../types.generated'
export const cookie: NonNullable<QueryResolvers['cookie']> = async (
  _parent,
  { name },
  { request },
) => {
  const cookie = await request.cookieStore?.get(name)
  return cookie?.value
}
