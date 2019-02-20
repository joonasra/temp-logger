import React, { useState, useEffect } from 'react'
import './App.css'
import About from './components/About'
import Data from './components/Data'
import LoginForm from './components/LoginForm'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import loginService from './services/login'
import temperatureService from './services/temperature'

const App = () => {
  const [values, setValues] = useState({ username: '', password: '' })
  const [user, setUser] = useState(null)
  const [screen, setScreen] = useState('data')
  const [data, setData] = useState({ temperatures: [] })
  const [refresh, setRefresh] = useState(0)

  const fetchData = async () => {
    const result = await temperatureService.getData()
    setData({ temperatures: result })
    setRefresh(0)
  }

  useEffect(() => {
    fetchData()
  }, [refresh])

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
    setScreen('data')
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
            {screen === 'data' ? (
              <div>
                <Data data={data.temperatures} refresh={() => setRefresh(1)} />
              </div>
            ) : null}

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
