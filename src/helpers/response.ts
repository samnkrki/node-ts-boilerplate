import { CustomResponse } from '../types/response'
import { Response } from 'express'
import Status from 'http-status'

function success(res: Response) {
  return function (result: CustomResponse) {
    const { code, data } = result
    return res.status(code || Status.OK).json({ data })
  }
}

function error(res: Response) {
  return function (result: CustomResponse) {
    const { details, stack, message, code } = result
    return res.status(code || Status.INTERNAL_SERVER_ERROR).json({ details, stack, message, code })
  }
}

export default {
  success,
  error,
}
