export interface ITokenRepository {
  token(email,time)
  verify(token)
}