import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { UserGreeter } from '../../Contexts/Users/application/UserGreeter';

type WelcomePostRequest = Request & {
  body: {
    name: string;
    password: string;
  };
};

export default class WelcomePostController implements Controller {
  constructor(private userGreeter: UserGreeter) {}

  async run(req: WelcomePostRequest, res: Response) {
    const { name, password } = req.body;

    try {
      const welcome = await this.userGreeter.run({ name, password });
      res.status(httpStatus.OK).send(welcome);
    } catch (error) {
      res.status(httpStatus.UNAUTHORIZED).send(error);
    }
  }
}
