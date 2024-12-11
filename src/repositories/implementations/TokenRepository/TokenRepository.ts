import { ITokenRepository } from "../../ITokenRepository";
import jwt from 'jsonwebtoken'

export class TokenRepository implements ITokenRepository {
  async token(email: any, time: any) {
    const token = await jwt.sign({ email }, 'sshh', {
      subject: `${email}`,
      expiresIn: time,
    });

    return token
  }

  async verify(token: any) {
    const tokenn = await jwt.verify(token, 'sshh');
    return tokenn
  }
}