import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { User } from "../entities/User";

interface UserRepository {
  createUser: ({ name, username }: CreateUserDTO) => Promise<User>;
  findUserById: (id: string) => Promise<User>;
  findUsers: () => Promise<User[]>;
  deleteUser: (id: string) => Promise<void>;
  updateUser: ({ id, name, username }: UpdateUserDTO) => Promise<User>;
  findByUsername: (username: string) => Promise<User>;
}

export { UserRepository };
