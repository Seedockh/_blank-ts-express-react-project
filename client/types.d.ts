interface User {
  nickname?: string
}

interface UserState {
  user: User | null
}

type UserAction = { type: 'setUser'; payload: User|null }
type UserReducer = (prevState: UserState, action: UserAction) => UserState
