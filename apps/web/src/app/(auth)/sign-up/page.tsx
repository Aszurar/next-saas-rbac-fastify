import Image from 'next/image'
import Link from 'next/link'

import GithubIcon from '@/assets/icons/github.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignUpPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="name" placeholder="Lucas..." />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" placeholder="lucas@..." />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password-confirmation">Confirm your password</Label>
        <Input
          id="password-confirmation"
          name="password-confirmation"
          type="password"
        />
      </div>

      <Button className="w-full" type="submit">
        Create account
      </Button>

      <span className="flex w-full items-center justify-center gap-2">
        Already registered?
        <Link
          href="/forgot-password"
          className="text-sm font-semibold text-foreground hover:underline"
        >
          Sign In
        </Link>
      </span>

      <Separator />

      <Button type="submit" variant="outline" className="w-full">
        <Image src={GithubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign up with Github
      </Button>
    </form>
  )
}
