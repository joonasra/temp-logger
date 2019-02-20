import React, { useState } from 'react'
import './App.css'
import About from './components/About'
import LoginForm from './components/LoginForm'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
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

            {screen === 'profile' ? (
              <div>
                <Profile user={user} />
              </div>
            ) : null}

            {screen === 'about' ? (
              <div>
                <About />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
