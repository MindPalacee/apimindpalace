type IMail = {
  email: string,
  sub:string,
  text: string
}

export interface IMailRepository {
  sendMessage(data: IMail)
}