import { AlertTriangle } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type FormErrorAlertProps = {
  message: string | null
  hasError: boolean
}
export function FormErrorAlert({ message, hasError }: FormErrorAlertProps) {
  if (hasError && !!message) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="size-4" />
        <AlertTitle>Sign in failed!</AlertTitle>
        <AlertDescription>
          <p>{message}</p>
        </AlertDescription>
      </Alert>
    )
  }

  return null
}
