import { NextFunction, Response, Request } from 'express'
import configuration from '../config/configuration'
import { ZodError } from 'zod'
import { CustomError } from '../errors/error'
import { CustomResponse } from '../types/response'
import response from '../helpers/response'
import { logger } from '../helpers'
import Status from 'http-status'

export function handleApiError(error: Error, _req: Request, res: Response, _next: NextFunction) {
  logger.error('Error in request', error)
  const payload = {
    code: Status.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
    details: null,
    ...(configuration.env === 'development' && { stack: error.stack }),
  } as unknown as Required<CustomResponse>

  if (error instanceof CustomError) {
    logger.error('Custom error occurred')
    payload.message = error.message
    payload.code = error.code
  }

  if (error instanceof ZodError) {
    logger.error('Error parsing request data')
    payload.message = 'Invalid Request data'
    payload.data = error.formErrors.fieldErrors
    payload.code = Status.UNPROCESSABLE_ENTITY
    payload.details = error.errors
  }

  // TODO: add database error handling here as well
  response.error(res)(payload)
}
