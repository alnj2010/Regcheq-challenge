import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import WelcomePostController from '../controllers/WelcomePostController';
//import { UserGreeter } from '../../Contexts/Users/application/UserGreeter';

export const register = (router: Router) => {
  const controller: WelcomePostController = container.get('App.controllers.WelcomePostController');
  //const greater: UserGreeter = new UserGreeter();
  //const controller: WelcomePostController = new WelcomePostController(greater);
  router.post('/user/welcome', (req: Request, res: Response) => controller.run(req, res));
};
