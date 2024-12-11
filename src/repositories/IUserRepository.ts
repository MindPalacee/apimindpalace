import { User } from "../entities/User"

type ITokenData = {
  id: number,
  pass: string,
  time: string
}

type INewPass = {
  email: string,
  password: string
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  findByUser(id: number): Promise<User>
  save(user: User): Promise<User>
  encryptpass(password: string): Promise<string>
  generateToken(data: ITokenData): Promise<string>
  verifyPass(pass: string, passU:string): Promise<any>
}