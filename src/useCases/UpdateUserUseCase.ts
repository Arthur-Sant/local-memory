import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { UserRepository } from "../repositories/UserRepository";

class UpdateUserUseCase {
  constructor(private updateUserRepository: UserRepository) {}

  async execute({ id, username, name }: UpdateUserDTO) {
    const existUserById = await this.updateUserRepository.findUserById(id);

    const existUserByUsername = await this.updateUserRepository.findByUsername(
      username
    );

    if (!id && !username && !name) {
      throw new Error("Username, Id and name is required");
    }

    if (!existUserById) {
      throw new Error("User no already exist");
    }

    if (existUserByUsername) {
      throw new Error("Username already exists");
    }

    const user = await this.updateUserRepository.updateUser({
      id,
      username,
      name,
    });

    return user;
  }
}

export { UpdateUserUseCase };
