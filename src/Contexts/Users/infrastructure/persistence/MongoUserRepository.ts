import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

export class MongoUserRepository implements UserRepository {
  async getById(id: Number): Promise<User> {
    return new User(id, 'Abraham', 'Navarro');
  }
}
