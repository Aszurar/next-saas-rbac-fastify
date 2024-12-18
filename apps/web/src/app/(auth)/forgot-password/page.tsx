import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ForgotPasswordPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <Button className="w-full" type="submit">
        Recover password
      </Button>

      <Button type="submit" variant="link" className="w-full" asChild>
        <Link href="/sign-in">Sign in instead</Link>
      </Button>
    </form>
  )
}
