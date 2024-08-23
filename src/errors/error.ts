import Status from 'http-status'

export class CustomError extends Error {
  public code: number
  constructor(
    message: string = 'Something went wrong, please try again later',
    status: number = Status.INTERNAL_SERVER_ERROR,
  ) {
    super(message)
    this.message = message
    this.code = status
  }
}
