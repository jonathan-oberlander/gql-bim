import type { MutationResolvers } from './../../../types.generated'
export const setCookie: NonNullable<MutationResolvers['setCookie']> = async (
  _parent,
  { name, value },
  { request },
) => {
  await request.cookieStore?.set({
    name,
    value,
    httpOnly: true, // Prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === 'production', // Only sent over HTTPS
    sameSite: 'lax', // CSRF protection
    expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
    path: '/',
    domain: null,
  })

  return value
}
