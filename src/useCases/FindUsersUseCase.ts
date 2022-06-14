import { UserRepository } from "../repositories/UserRepository";

class FindUsersUseCase {
  constructor(private findUsersRepository: UserRepository) {}

  async execute() {
    const users = await this.findUsersRepository.findUsers();

    return users;
  }
}

export { FindUsersUseCase };
