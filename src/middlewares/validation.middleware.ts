import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

type RequestType = 'body' | 'query' | 'params'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaType = Partial<Record<RequestType, z.ZodObject<any, any>>>

function validateData(schema: SchemaType) {
  return (req: Request, res: Response, next: NextFunction) => {
    // validate request query, params and body
    Object.keys(schema).forEach((key: string) => {
      if (schema[key as RequestType]) {
        schema[key as RequestType]!.parse(req[key as RequestType])
      }
    })
    next()
  }
}

export default validateData
