import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Login, Home } from './pages'
import User from './core/user'

const user = localStorage.getItem('user')

const userInitialState = {
  user: user ? JSON.parse(user) : null,
}

// Define your reducer actions here
const reducer = (prevState: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'setUser':
      if (!action.payload) {
        localStorage.removeItem('user')
        return { ...prevState, user: null }
      }

      const user = { ...prevState.user, ...action.payload }
      localStorage.setItem('user', JSON.stringify(user))
      return { ...prevState, user }
    default:
      return prevState
  }
}

function App(): JSX.Element {
  return (
    <>
      <header>
        <div className="section has-text-centered">
          <Link to="/">
            <h1 className="title is-1">My React App</h1>
          </Link>
        </div>
      </header>
      <main className="section">
        <User.Provider initialState={userInitialState} reducer={reducer}>
          <Route
            exact
            path="/"
            component={(): JSX.Element => {
              return <Login />
            }}
          />
          <Route
            exact
            path="/home"
            component={(): JSX.Element => {
              return <Home />
            }}
          />
        </User.Provider>
      </main>
      <footer className="section">
        <p className="has-text-centered">
          <span>&copy;2020 </span>
          <a href="/">Your</a>
          <span> - </span>
          <a href="/">Name</a>
        </p>
      </footer>
    </>
  )
}

export default App
