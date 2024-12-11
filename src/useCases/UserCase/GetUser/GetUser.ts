import { IUserRepository } from "../../../repositories/IUserRepository";
import { IGetUserDTO } from "./IGetUserDTO";

export class GetUser {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: IGetUserDTO) {
    const user:any = await this.userRepository.findByEmail(data.email)
    if (!user) throw new Error("Email ou senha invalidos")
    const verifyPass = await this.userRepository.verifyPass(data.password,user.password)
    if (!verifyPass) throw new Error("Email ou senha invalidos")

    const token = await this.userRepository.generateToken({id:user.id, pass:"LOLI", time:'7d'})
    return {user, token}
  }
}