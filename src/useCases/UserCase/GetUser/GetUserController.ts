import { Request, Response } from "express";
import { GetUser } from "./GetUser";

export class GetUserController {
  constructor(
    private getUser: GetUser
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.params
      if(!email || !password) throw new Error("Informações incorretas")
      
      const user = await this.getUser.execute({
        email:email.toLowerCase(), password:password.toLowerCase() })

      return res.status(200).json(user)
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }

  }
}