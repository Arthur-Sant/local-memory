import { Request, Response } from "express";
import { UserRepositoryImplementations } from "../repositories/implementations/UserRepositoryImplementations";
import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserRepository = new UserRepositoryImplementations();
    const deleteUserUseCase = new DeleteUserUseCase(deleteUserRepository);

    try {
      await deleteUserUseCase.execute(id);
      const OK_STATUS = 200;
      return response.status(OK_STATUS);

    } catch (err) {
      const BAD_REQUEST_STATUS = 400;
      return response.status(BAD_REQUEST_STATUS).json(err.message);
    }
  }
}

export { DeleteUserController };
