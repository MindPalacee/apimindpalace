import { userRopsitory } from "../../../repositories/implementations/UserRepository";
import { CreateTask } from "./CreateTask";
import { CreateTaskController } from "./CreateTaskConstructor";

const createTask = new CreateTask(userRopsitory);
const createTaskController = new CreateTaskController(createTask);

export { createTask, createTaskController };
