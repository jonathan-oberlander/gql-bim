import { NotFoundError } from '../../../../error/notFound'
import type { QueryResolvers } from './../../../types.generated'
import type { UserMapper } from '../../schema.mappers'

const users: UserMapper[] = [
  { id: '001', firstName: 'Luke', lastName: 'Skywalker', isAdmin: 'YES' },
  { id: '002', firstName: 'Sabrina', lastName: 'Carpenter', isAdmin: 'NO' },
  { id: '003', firstName: 'johnny', lastName: 'Depp', isAdmin: 'NO' },
]

export const user: NonNullable<QueryResolvers['user']> = async (
  _,
  arg,
  { customerId, log },
) => {
  log.info({ customerId, userId: arg.id }, 'Fetching user details')

  const user = users.find((user) => user.id === arg.id)

  if (!user) {
    throw new NotFoundError(
      `User with id '${arg.id}' not found.`,
      {
        xtc: 'u mad?',
      },
      {
        'x-custom-header': 'u mad?',
      },
    )
  }

  return user
}
