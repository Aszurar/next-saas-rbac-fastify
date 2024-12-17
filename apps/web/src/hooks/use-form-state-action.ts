import { FormEvent, useState, useTransition } from 'react'

type FormStateProps = {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}

type UseFormStateActionParams = {
  action: (data: FormData) => Promise<FormStateProps>
  initialState?: FormStateProps
  onSuccess?: () => Promise<void> | void
}

type UseFormStateActionReturn = {
  isLoading: boolean
  formState: FormStateProps
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const FORM_STATE_ACTION_INITIAL_STATE: FormStateProps = {
  success: false,
  message: null,
  errors: null,
}

function useFormStateAction({
  action,
  onSuccess,
  initialState = FORM_STATE_ACTION_INITIAL_STATE,
}: UseFormStateActionParams): UseFormStateActionReturn {
  const [isLoading, setTransaction] = useTransition()

  const [formState, setFormState] = useState(initialState)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    setTransaction(async () => {
      const result = await action(data)

      if (result.success && onSuccess) {
        await onSuccess()
      }

      setFormState(result)
    })
  }

  return {
    isLoading,
    formState,
    handleSubmit,
  } as const
}

export { useFormStateAction, FORM_STATE_ACTION_INITIAL_STATE }
