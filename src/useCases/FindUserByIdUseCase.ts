import { UserRepository } from "../repositories/UserRepository";

class FindUserByIdUseCase {
  constructor(private findUserByIdRepository: UserRepository) {}

  async execute(id: string) {
    const existUser = await this.findUserByIdRepository.findUserById(id);

    if (!existUser) {
      throw new Error("Non-existing user");
    }

    return existUser;
  }
}

export { FindUserByIdUseCase };
