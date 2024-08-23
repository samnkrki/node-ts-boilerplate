import { NextFunction, Request, Response } from 'express'
import logger from '../helpers/logger'

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url} ${req.ip}`)
  next()
}

export default requestLogger
