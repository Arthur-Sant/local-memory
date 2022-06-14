import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { FindUserByIdController } from "./controllers/FindUserByIdController";
import { FindUsersController } from "./controllers/FindUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const findUsersController = new FindUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/users", createUserController.handle);
router.get("/users/:id", findUserByIdController.handle);
router.get("/users", findUsersController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.put("/users/:id", updateUserController.handle);



export { router };
