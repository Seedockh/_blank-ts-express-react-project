import React, { useEffect } from 'react'
import useInput from '../core/useInput'
import User from '../core/user'
import { useHistory } from 'react-router-dom'

export default function Home(): JSX.Element {
  const { value: nickname, bind } = useInput('')
  const [{ user }, dispatch] = User.GlobalState()
  const history = useHistory()

  useEffect(() => {
    // do something once here
    console.log('Home page called !')
  }, [])

  useEffect(() => {
    console.log(`user: ${JSON.stringify(user)}`)
  }, [user])

  const handleNickname = (): void => {
    dispatch({ type: 'setNickname', payload: { nickname } })
    console.log('Nickname handled !')
    // redurect to next view : history.push('/next-view-route')
    alert('Check your console.log !')
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
          <button className="button is-primary input" onClick={handleNickname}>
            Connect
          </button>
        </div>
      </div>
    </section>
  )
}
