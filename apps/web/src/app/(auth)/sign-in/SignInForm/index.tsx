'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import GithubIcon from '@/assets/icons/github.svg'
import { FormErrorAlert } from '@/components/Alert/FormErrorAlert'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  FORM_STATE_ACTION_INITIAL_STATE,
  useFormStateAction,
} from '@/hooks/use-form-state-action'

import { signWithEmailAndPassword } from '../actions'

export function SignInForm() {
  const router = useRouter()
  const { formState, handleSubmit, isLoading } = useFormStateAction({
    action: signWithEmailAndPassword,
    initialState: FORM_STATE_ACTION_INITIAL_STATE,
    onSuccess: () => {
      router.push('/dashboard')
    },
  })

  const { success, message, errors } = formState

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormErrorAlert hasError={!success} message={message} />

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" />

        <ErrorMessage message={errors?.email?.[0]} />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />

        <ErrorMessage message={errors?.password?.[0]} />
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

      <Button
        type="submit"
        variant="link"
        isLoading={isLoading}
        className="w-full"
        asChild
      >
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
