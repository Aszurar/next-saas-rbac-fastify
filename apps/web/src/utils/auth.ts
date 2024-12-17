import { cookies } from 'next/headers'

export async function isAuthenticated() {
  const cookiesStore = await cookies()

  const isToken = !!cookiesStore.get('token')?.value

  return isToken
}
