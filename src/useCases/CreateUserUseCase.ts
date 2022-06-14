import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserRepository } from "../repositories/UserRepository";

class CreateUserUseCase {
  constructor(private createUserRepository: UserRepository) {}

  async execute({ username, name }: CreateUserDTO) {
    const existUser = await this.createUserRepository.findByUsername(username);

    if (!username && !name) {
      throw new Error("Username and name is required");
    }

    if (existUser) {
      throw new Error("User already exist");
    }

    const user = await this.createUserRepository.createUser({
      username,
      name,
    });

    return user;
  }
}

export { CreateUserUseCase };
