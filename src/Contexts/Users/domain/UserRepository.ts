import { User } from './User';

export interface UserRepository {
  getById(id: Number): Promise<User | null>;
}
