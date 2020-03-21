import React, { useEffect } from 'react'
import User from '../core/user'
import { useHistory } from 'react-router-dom'

export default function Home(): JSX.Element {
  const [{ user }, dispatch] = User.GlobalState()
  const history = useHistory()

  useEffect(() => {
    // do something once here
    console.log('Home page called !')

    if (!user) history.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(`user: ${JSON.stringify(user)}`)
  }, [user])

  const logout = (): void => {
    dispatch({ type: 'setUser', payload: null })
    // redirect to previous view :
    history.push('/')
  }

  return (
    <section className="container">
      <div className="has-text-centered">
        <h3 className="title is-3">Welcome Home, friend {user?.nickname}. 🤖</h3>
      </div>
      <div className="section">
        <button className="button is-primary input" onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  )
}
