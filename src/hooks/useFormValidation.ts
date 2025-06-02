import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface FormValues {
  email: string;
}

export function useFormValidation () {
  const { register, handleSubmit, 
    formState: {errors},
    reset,
  } = useForm<FormValues>()

  const [success, setSuccess] = useState('')

  return { register, handleSubmit, errors ,reset, success, setSuccess}
}