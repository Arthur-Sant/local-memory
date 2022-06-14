import { Request, Response } from "express";
import { UserRepositoryImplementations } from "../repositories/implementations/UserRepositoryImplementations";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { body } = request;
    const { id } = request.params;

    const updateUserRepository = new UserRepositoryImplementations();
    const updateUserUseCase = new UpdateUserUseCase(updateUserRepository);

    try {
      const user = await updateUserUseCase.execute({ id, ...body });
      const OK_STATUS = 200;
      return response.status(OK_STATUS).json(user);
      
    } catch (err) {
      const BAD_REQUEST_STATUS = 400;
      return response.status(BAD_REQUEST_STATUS).json(err.message);
    }
  }
}

export { UpdateUserController };
