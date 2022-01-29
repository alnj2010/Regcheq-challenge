import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import WelcomePostController from '../controllers/WelcomePostController';

export const register = (router: Router) => {
  const controller: WelcomePostController = container.get('App.controllers.WelcomePostController');
  router.post('/user/welcome', (req: Request, res: Response) => controller.run(req, res));
};
