import { AppDataSource } from '../../config/db.config.js';
import User from '../model/user.model.js';

class UserService {
  getRepository() {
    return AppDataSource.getRepository(User);
  }

  async create(data) {
    const repository = this.getRepository();
    const user = repository.create(data);
    return await repository.save(user);
  }

  async update(id, data) {
    const repository = this.getRepository();
    await repository.update(id, data);
    return await repository.findOneBy({ id });
  }

  async getAll() {
    const repository = this.getRepository();
    return await repository.find();
  }

  async delete(id) {
    const repository = this.getRepository();
    return await repository.delete(id);
  }
}

// Exportamos una instancia de la clase
export default new UserService();