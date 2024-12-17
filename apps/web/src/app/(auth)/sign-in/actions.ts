'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { signIn } from '@/http/requests/sign-in'

const SEVEN_DAYS = 60 * 60 * 24 * 7

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email, please, provide a valid email.' }),
  password: z.string().min(6, {
    message: "It's necessary at least 6 characters.",
  }),
})

export async function signWithEmailAndPassword(data: FormData) {
  const results = signInSchema.safeParse(Object.fromEntries(data))

  if (!results.success) {
    const errors = results.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  try {
    const response = await signIn({
      email: data.get('email') as string,
      password: data.get('password') as string,
    })

    const cookiesStore = await cookies()

    cookiesStore.set('token', response.token, {
      path: '/',
      maxAge: SEVEN_DAYS,
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()
      return {
        success: false,
        message,
        errors: null,
      }
    }
    console.error('Unexpected error:', error)

    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
