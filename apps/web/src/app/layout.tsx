import './globals.css'

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/utils/auth'

export const metadata: Metadata = {
  title: 'Create Next App',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuth = await isAuthenticated()

  if (isAuth) {
    console.log('Usuário autenticado, redirecionando para o dashboard')
    redirect('/dashboard')
  }

  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
