import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";

import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";

let users: User[] = [];
const pathDB = path.join(__dirname, "db.json");

fs.readFile(pathDB, "utf-8", (err, data) => {
  if (err) {
    throw new Error("Internal Server Error");
  }

  if (data) {
    users = JSON.parse(data);
  }
});

class UserRepositoryImplementations implements UserRepository {
  async findByUsername(username: string): Promise<User> {
    const user = users.find((user) => user.username === username);

    return Promise.resolve(user);
  }

  async createUser({ name, username }: CreateUserDTO): Promise<User> {
    const id = uuid();

    const user = {
      id,
      username,
      name,
    };

    users.push(user);

    this.writeFile(users);

    return Promise.resolve(user);
  }

  async deleteUser(id: string): Promise<void> {
    const deleteUser = users.filter((user) => user.id !== id);

    console.log(id);
    console.log(deleteUser);

    this.writeFile(deleteUser);
  }

  async updateUser({ id, username, name }: UpdateUserDTO): Promise<User> {
    const userIndex = users.findIndex((user) => user.id === id);
    const user = {
      id,
      username,
      name,
    };

    users[userIndex] = user;

    this.writeFile(users);

    return Promise.resolve(users[userIndex]);
  }

  async findUsers(): Promise<User[]> {
    return Promise.resolve(users);
  }

  async findUserById(id: string): Promise<User> {
    const user = users.find((user) => user.id === id);

    return Promise.resolve(user);
  }

  private writeFile(users: User[]) {
    fs.writeFile(pathDB, JSON.stringify(users), (err) => {
      if (err) {
        throw new Error("Internal Server Error");
      }
    });
  }
}

export { UserRepositoryImplementations };
