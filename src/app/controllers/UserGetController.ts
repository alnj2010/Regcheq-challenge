import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { UserGetter } from '../../Contexts/Users/application/UserGetter';

type UserGetRequest = Request & {
  params: {
    id: number;
  };
};

export default class UserGetController implements Controller {
  constructor(private userGetter: UserGetter) {}

  async run(req: UserGetRequest, res: Response) {
    const { id } = req.params;

    try {
      const user = await this.userGetter.run({ id });
      res.status(httpStatus.OK).send(user);
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send(error);
    }
  }
}
