import { createLogger } from 'graphql-yoga'
import { NotFoundError } from '../../../../error/notFound'
import type { QueryResolvers } from './../../../types.generated'
import type { UserMapper } from '../../schema.mappers'

const logger = createLogger('debug')

const users: UserMapper[] = [
  { id: '001', firstName: 'Luke', lastName: 'Skywalker', isAdmin: 'YES' },
  { id: '002', firstName: 'Sabrina', lastName: 'Carpenter', isAdmin: 'NO' },
  { id: '003', firstName: 'johnny', lastName: 'Depp', isAdmin: 'NO' },
]

export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  logger.info('[customerId]', _ctx.customerId)

  const user = users.find((user) => user.id === _arg.id)

  if (!user) {
    throw new NotFoundError(
      `User with id '${_arg.id}' not found.`,
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
