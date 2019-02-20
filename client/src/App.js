import React, { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import Navigation from './components/Navigation'
import loginService from './services/login'

const App = () => {
  const [values, setValues] = useState({ username: '', password: '' })
  const [user, setUser] = useState(null)
  const [screen, setScreen] = useState(null)

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const login = async e => {
    try {
      e.preventDefault()
      const newUser = await loginService.login({
        username: values.username,
        password: values.password
      })
      setValues({ username: '', password: '' })
      setUser(newUser)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = e => {
    e.preventDefault()
    setUser(null)
  }

  const changeScreen = screen => {
    setScreen(screen)
  }

  return (
    <div className="App">
      <div className="container">
        {!user ? (
          <LoginForm
            values={values}
            login={login}
            handleChange={handleChange}
          />
        ) : (
          <div>
            <Navigation logout={logout} changeScreen={changeScreen} />
            {/* <div>User: {user.username}</div>
            <div>User token: {user.token}</div> */}
            {!screen ? null : (
              <div>
                <h3>{screen}</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
