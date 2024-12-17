type ErrorMessageProps = {
  message?: string | null
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) {
    return null
  }

  return (
    <p className="text-xs font-semibold text-red-500 dark:text-red-400">
      {message}
    </p>
  )
}
