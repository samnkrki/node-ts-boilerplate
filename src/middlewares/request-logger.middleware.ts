import { NextFunction, Request, Response } from 'express'
import logger from '../helpers/logger'

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  logger.info(`${req.method} ${req.url} ${req.ip}`)
  next()
}
