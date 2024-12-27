import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUserRepository";

import prisma from "@prisma/client";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

type ITokenData = {
  id: number;
  pass: string;
  time: string;
};

type ITaskData = {
  title: string;
  descripition: string;
  date_time: string;
  status: string,
  authorid: string
};

export class UserRopsitory implements IUserRepository {
  private prisma: any = new prisma.PrismaClient();
  private crypt: Function = hash;
  private gToken: Function = sign;
  private verifyP: Function = compare;

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      }
    });

    return user;
  }

  async findByUser(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where:{
        id:id
      }
    })
    return user;
  }

  async save(user: User): Promise<User> {
    const result = await this.prisma.user.create({
      data: user,
    });

    return result;
  }

  async encryptpass(password: string): Promise<string> {
    const result = await this.crypt(password, 1);

    return result;
  }

  async generateToken(data: ITokenData): Promise<string> {
    const token = await this.gToken({ userID: data.id }, data.pass, {
      subject: `${data.id}`,
      expiresIn: data.time,
    });

    return token;
  }

  async verifyPass(pass: string, passU: string): Promise<any> {
    const passw = await this.verifyP(pass, passU);
    return passw;
  }

  async saveTask(task: ITaskData): Promise<any> {
    const cratetask = await  this.prisma.user.create({
      data: {
        task: {
          create: [
            {
              title: task.title,
              descripition: task.descripition,
              data_time: task.date_time,
              status: task.status,
              authorId: task.authorid,
            }
          ],
        },
      },
    })

    return cratetask
  }

}
