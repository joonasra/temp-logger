import React, { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import loginService from './services/login'

const App = () => {
  const [values, setValues] = useState({ username: '', password: '' })
  const [user, setUser] = useState(null)

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
            <div>User: {user.username}</div>
            <div>User token: {user.token}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
