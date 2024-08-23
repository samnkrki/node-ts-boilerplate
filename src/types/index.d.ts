// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: unknown;
    }
  }
}