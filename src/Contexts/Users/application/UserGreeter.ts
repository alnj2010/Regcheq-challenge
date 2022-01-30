import { welcomeMsg, WelcomeMsg } from '../domain/WelcomeMsg';
import { WelcomeRequest } from '../domain/WelcomeRequest';

export class UserGreeter {
  constructor() {}

  async run(request: WelcomeRequest): Promise<WelcomeMsg> {
    if (request.name === request.password && request.name === 'admin') {
      return welcomeMsg;
    } else {
      return Promise.reject({ errorMsg: 'The supplied user is not an administrator' });
    }
  }
}
