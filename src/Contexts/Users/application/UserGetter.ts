import { User } from '../domain/User';
import { GetUserRequest } from '../domain/GetUserRequest';
import { UserRepository } from '../domain/UserRepository';

export class UserGetter {
  constructor(private userRepository: UserRepository) {}

  async run(request: GetUserRequest): Promise<User> {
    return this.userRepository.getById(request.id);
  }
}
