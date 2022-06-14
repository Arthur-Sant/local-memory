import { UserRepository } from "../repositories/UserRepository";

class DeleteUserUseCase {
  constructor(private deleteUserRepository: UserRepository) {}

  async execute(id: string) {
    const existUser = await this.deleteUserRepository.findUserById(id);

    if (!existUser) {
      throw new Error("Non-existing user");
    }

    await this.deleteUserRepository.deleteUser(id);
  }
}

export { DeleteUserUseCase };
