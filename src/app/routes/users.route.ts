import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body, checkSchema } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const welcomeSchema = [body('name').exists().isString(), body('password').exists().isString()];

  router.post('/user/welcome', welcomeSchema, validateReqSchema, (req: Request, res: Response) =>
    container.get('App.controllers.WelcomePostController').run(req, res)
  );

  const getUserSchema = checkSchema({
    id: {
      in: ['params', 'query'],
      errorMessage: 'ID is wrong',
      isInt: true,
      // Sanitizers can go here as well
      toInt: true
    }
  });

  router.get('/user/:id', getUserSchema, validateReqSchema, (req: Request, res: Response) =>
    container.get('App.controllers.UserGetController').run(req, res)
  );
};
