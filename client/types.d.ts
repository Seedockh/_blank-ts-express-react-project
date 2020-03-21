interface User {
  nickname: string
}

interface UserState {
  user: User | null
}

type UserAction = { type: 'setNickname'; payload: User }
type UserReducer = (prevState: UserState, action: UserAction) => UserState
