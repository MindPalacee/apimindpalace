import { IMailRepository } from "../../IMailRepository";

import mail from 'nodemailer';

type IMail = {
    email: string,
    sub:string,
    text: string
}

export class MailRepository implements IMailRepository {
    async sendMessage(data: IMail) {
        const trans = mail.createTransport({
            service:'gmail',
            auth: {
                user:"mindpalace.corp@gmail.com",
                pass:"jgdo dtoh nfjt yzzt"
            }
        })

        trans.sendMail({
            from:"mindpalace.corp@gmail.com",
            to:data.email,
            subject:data.sub,
            text:data.text
        }, (err: any) => {
            if(err) {
                console.log(err)
            } 
        })
    }
}