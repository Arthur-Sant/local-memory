import { Request, Response } from "express";
import { UserRepositoryImplementations } from "../repositories/implementations/UserRepositoryImplementations";
import { FindUsersUseCase } from "../useCases/FindUsersUseCase";

class FindUsersController {
  async handle(request: Request, response: Response) {
    const findUsersRepository = new UserRepositoryImplementations();
    const findUsersUseCase = new FindUsersUseCase(findUsersRepository);

    try {
      const users = await findUsersUseCase.execute();
      const OK_STATUS = 200;
      return response.status(OK_STATUS).json(users);
      
    } catch (err) {
      const BAD_REQUEST_STATUS = 400;
      return response.status(BAD_REQUEST_STATUS).json(err.message);
    }
  }
}

export { FindUsersController };
