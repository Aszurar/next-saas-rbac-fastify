import crypto from 'node:crypto'

import { z } from 'zod'

import { ISignInRequest } from '@/http/requests/sign-in'

export async function POST(req: Request) {
  const body = (await req.json()) as unknown as ISignInRequest
  console.log('Ação de Login com senha:', body)

  const _email = z.string().email().safeParse(body.email)
  const _password = z.string().min(6).safeParse(body.password)

  if (_email.success === false) {
    return Response.json(
      {
        message: 'Email inválido',
      },
      { status: 400 },
    )
  }

  if (_password.success === false) {
    return Response.json(
      {
        message: 'Senha inválida',
      },
      { status: 400 },
    )
  }

  const fakeToken = crypto.randomUUID()

  return Response.json(
    {
      token: fakeToken,
    },
    { status: 200 },
  )
}
