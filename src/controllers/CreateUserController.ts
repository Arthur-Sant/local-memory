import { Request, Response } from "express";
import { UserRepositoryImplementations } from "../repositories/implementations/UserRepositoryImplementations";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { body } = request;

    const createUserRepository = new UserRepositoryImplementations();
    const createUserUseCase = new CreateUserUseCase(createUserRepository);

    try {
      const user = await createUserUseCase.execute(body);
      const CREATED_STATUS = 201;
      return response.status(CREATED_STATUS).json(user);
    } catch (err) {
      const BAD_REQUEST_STATUS = 400;
      return response.status(BAD_REQUEST_STATUS).json(err.message);
    }
  }
}

export { CreateUserController };
