import { IMailRepository } from "../../../repositories/IMailRepository";
import { nodemailer } from "../../../repositories/implementations/MailRepository";
import { ISendDTO } from "./ISendDTO";

export class Send {
  constructor(
    public mailRepository: IMailRepository
  ) {}

  async execute(data: ISendDTO) {
    await nodemailer.sendMessage({sub:data.sub, email:data.email, text:data.text})
  }
}