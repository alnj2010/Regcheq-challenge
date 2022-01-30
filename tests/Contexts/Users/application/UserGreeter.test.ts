import { UserGreeter } from '../../../../src/Contexts/Users/application/UserGreeter';
import { WelcomeRequest } from '../../../../src/Contexts/Users/domain/WelcomeRequest';
import { welcomeMsg, WelcomeMsg } from '../../../../src/Contexts/Users/domain/WelcomeMsg';

describe('UserGreeter', () => {
  it('should return a welcome message', async () => {
    const request: WelcomeRequest = {
      name: 'admin',
      password: 'admin'
    };
    const useCase = new UserGreeter();

    const result: WelcomeMsg = await useCase.run(request);
    expect(result).toEqual(welcomeMsg);
  });
});

it('should return a errorMsg', async () => {
  const request: WelcomeRequest = {
    name: 'abraham',
    password: '1234'
  };
  const useCase = new UserGreeter();
  let result;
  try {
    result = await useCase.run(request);
  } catch (error) {
    result = error;
  }

  expect(result).toHaveProperty('errorMsg');
});
