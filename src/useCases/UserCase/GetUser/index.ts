
import { userRopsitory } from "../../../repositories/implementations/UserRepository";
import { GetUser } from "./GetUser";
import { GetUserController } from "./GetUserController";

const getUser = new GetUser(userRopsitory)
const getUserController = new GetUserController(getUser)

export { getUser, getUserController }