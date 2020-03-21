import { useState } from 'react'

type TValue = string | number

interface HookInput {
  value: TValue
  setValue(v: unknown): void
  reset(): void
  bind: {
    value: TValue
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
  }
}

export default function useInput(initialValue: TValue): HookInput {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset(): void {
      setValue(initialValue)
    },
    bind: {
      value,
      onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value)
      },
    },
  }
}
