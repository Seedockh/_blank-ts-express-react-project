import React, { useEffect } from 'react'
import useInput from '../core/useInput'
import User from '../core/user'
import { useHistory } from 'react-router-dom'

export default function Login(): JSX.Element {
  const { value: nickname, bind } = useInput('')
  const [{ user }, dispatch] = User.GlobalState()
  const history = useHistory()

  useEffect(() => {
    // do something once here
    console.log('Login page called !')
    if (user) history.push('/home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(`user: ${JSON.stringify(user)}`)
  }, [user])

  const login = (): void => {
    dispatch({ type: 'setUser', payload: { nickname } })
    console.log('User handled !')
    alert('Check your console.log !')
    // redirect to next view :
    history.push('/home')
  }

  return (
    <section className="container">
      <div className="has-text-centered">
        <h3 className="title is-3">LOGIN</h3>
      </div>
      <div className="field section">
        <label className="label">Nickname</label>
        <div className="control">
          <input
            type="text"
            placeholder="Nickname"
            className="input"
            {...bind}
          />
        </div>
      </div>
      <div className="field section">
        <div className="control">
          <button className="button is-primary input" onClick={login}>
            Connect
          </button>
        </div>
      </div>
    </section>
  )
}
