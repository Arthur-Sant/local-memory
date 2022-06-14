import { Request, Response } from "express";
import { UserRepositoryImplementations } from "../repositories/implementations/UserRepositoryImplementations";
import { FindUserByIdUseCase } from "../useCases/FindUserByIdUseCase";

class FindUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findUserByIdRepository = new UserRepositoryImplementations();
    const findUserByIdUseCase = new FindUserByIdUseCase(findUserByIdRepository);

    try {
      const user = await findUserByIdUseCase.execute(id);
      const OK_STATUS = 200;
      return response.status(OK_STATUS).json(user);
      
    } catch (err) {
      const BAD_REQUEST_STATUS = 400;
      return response.status(BAD_REQUEST_STATUS).json(err.message);
    }
  }
}

export { FindUserByIdController };
