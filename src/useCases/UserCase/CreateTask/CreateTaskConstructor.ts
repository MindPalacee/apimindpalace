import { Request, Response } from "express";
import { CreateTask } from "./CreateTask";

export class CreateTaskController {
  constructor(private createTask: CreateTask) {}

  async handle(req: Request, res: Response) {
    const { title, descripition, date_time, email } = req.body;

    try {
      if (!title || !descripition || !date_time || !email)
        throw new Error("Informações incorretas");

      const task = await this.createTask.execute({
        title,
        descripition,
        date_time,
        email: email.toLowerCase(),
      });

      return res.status(201).json({ task });
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}
