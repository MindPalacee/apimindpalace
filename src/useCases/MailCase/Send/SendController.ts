import { Response, Request } from "express";
import { Send } from "./Send";

export class SendController {
    constructor(
        public send: Send
    ) {}

    async handle(req: Request, res: Response) {
        const { email, sub, text } = req.body
        try {
            if (!email || !sub || !text) throw new Error("Informações incorretas")

           await this.send.execute({email, sub, text})

           return res.json({message:`Email enviado pra ${email}`})
        } catch (error) {
            return res.json({
                error: error.message || "Unexpected error."
            })
        }
    }
}