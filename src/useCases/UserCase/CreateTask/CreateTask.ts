import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateTaskDTO } from './ICreateTask'

export class CreateTask {
  constructor(
    public userRepository: IUserRepository
  ){}

  async execute(data: ICreateTaskDTO) {
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) throw new Error('Usuário não encontrado.')

    const task = {
      title: data.title,
      descripition: data.descripition,
      date_time: data.date_time,
      status: "InProgress",
      authorid: user.id
    }

    const result = await this.userRepository.saveTask(task)
    return result
  }
}