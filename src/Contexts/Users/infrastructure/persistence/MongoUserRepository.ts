import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import mongoose, { Model } from 'mongoose';

var UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lastname: String
});

export class MongoUserRepository implements UserRepository {
  private db: Model<any, {}, {}>;

  constructor() {
    this.db = mongoose.model('users', UserSchema);
  }

  async getById(id: Number): Promise<User | null> {
    try {
      const result = await this.db.findOne({ id: id });
      return result ? new User(result.name, result.lastname) : null;
    } catch (error) {
      throw error;
    }
  }
}
