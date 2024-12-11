// * Importando o metodo ROUTER do express
import { Router } from "express";
import { TokenRepository } from "./repositories/implementations/TokenRepository/TokenRepository";
import { sendcontroller } from "./useCases/MailCase/Send";

// ! Codigos
import { createUserController } from "./useCases/UserCase/CreateUser";
import { getUserController } from "./useCases/UserCase/GetUser";

const router = Router(); // variavel com as rotas

// * ROTAS

// ? Rota de Criação de usuario
router.post('/api/v1/user', async (req, res) => {
  return await createUserController.handle(req, res)
})

// ? Rota para buscar o usuario
router.get('/api/v1/user/:email/:password', async (req, res) => {
  return await getUserController.handle(req, res)
})

// ! Exportando as rotas para o app
export { router }