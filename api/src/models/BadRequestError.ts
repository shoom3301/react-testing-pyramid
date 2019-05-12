export class BadRequestError implements Error {
  stack?: string;
  name = 'BadRequestError';

  constructor(public message: string) {
    Error.captureStackTrace(this, this.constructor);
  }
}
