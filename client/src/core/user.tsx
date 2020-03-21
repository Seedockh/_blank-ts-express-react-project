import React, { createContext, useReducer, useContext } from 'react'

export const Context = createContext<[UserState, any] | null>(null)

interface ProviderArgs {
  initialState: UserState
  reducer: UserReducer
  children: React.ReactNode
}

export const Provider = ({
  initialState,
  reducer,
  children,
}: ProviderArgs): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state as UserState, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const GlobalState = (): any => useContext(Context)

export default {
  Context,
  Provider,
  GlobalState,
}
