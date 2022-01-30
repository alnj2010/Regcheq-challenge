import { User } from './User';

export interface UserRepository {
  getById(id: String): Promise<User>;
}
