import { nodemailer } from "../../../repositories/implementations/MailRepository";
import { Send } from "./Send";
import { SendController } from "./SendController";

const send = new Send(nodemailer)
const sendcontroller = new SendController(send)

export { sendcontroller, send }