import { api } from '../api'

export interface ISignInRequest {
  email: string
  password: string
}

interface ISignInResponse {
  token: string
}

export function signIn({ email, password }: ISignInRequest) {
  const response = api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<ISignInResponse>()

  return response
}
