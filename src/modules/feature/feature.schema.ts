// store request response related schema here

import { z } from 'zod'

const featureAddBSchema = z
  .object({
    name: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(['active', 'inactive']),
    createdBy: z.string(),
    updatedBy: z.string(),
  })
  .required()

export default { featureAddBSchema }
