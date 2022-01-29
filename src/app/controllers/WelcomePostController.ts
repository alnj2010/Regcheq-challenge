import { Request, Response } from 'express';
//import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class WelcomePostController implements Controller {
  async run(req: Request, res: Response) {
    throw new Error('Method not implemented');
  }
}
