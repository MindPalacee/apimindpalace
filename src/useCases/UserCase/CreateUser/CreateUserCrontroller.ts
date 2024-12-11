import { Request, Response } from "express";
import { send } from "../../MailCase/Send";
import { Send } from "../../MailCase/Send/Send";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(
    private createUser: CreateUser
  ) {}

  async handle(req: Request, res: Response ) {
    const { name, email, password } = req.body
  
    try {
      if(!name || !email || !password) throw new Error("Informações incorretas")
      
      const user = await this.createUser.execute({
        name,
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      })

      send.execute({email, sub:"Bem Vindo 😁😍", text:`${name}😋! Seja bem vindo(a) ao seu palacio!`})
      return res.status(201).json({user})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}