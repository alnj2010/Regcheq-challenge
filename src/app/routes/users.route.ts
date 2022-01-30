import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import WelcomePostController from '../controllers/WelcomePostController';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [body('name').exists().isString(), body('password').exists().isString()];

  const controller: WelcomePostController = container.get('App.controllers.WelcomePostController');

  router.post('/user/welcome', reqSchema, validateReqSchema, (req: Request, res: Response) => controller.run(req, res));
};
