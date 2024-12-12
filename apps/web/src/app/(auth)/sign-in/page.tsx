import Image from 'next/image'
import Link from 'next/link'

import GithubIcon from '@/assets/icons/github.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignInPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>

      <Link
        href="/forgot-password"
        className="text-sm font-medium text-foreground hover:underline"
      >
        Forgot your password?
      </Link>

      <Button className="w-full" type="submit">
        Sign in with e-mail
      </Button>

      <Button type="submit" variant="link" className="w-full" asChild>
        <Link href="/sign-up">Create new account</Link>
      </Button>

      <Separator />

      <Button type="submit" variant="outline" className="w-full">
        <Image src={GithubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign in with Github
      </Button>
    </form>
  )
}
