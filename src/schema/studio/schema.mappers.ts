import type { Studio } from '../types.generated'

export type StudioMapper = Omit<Studio, 'classes' | 'employees'>
