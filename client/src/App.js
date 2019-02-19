import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <div className="container">
        <div className="login">
          <form className="form-signin">
            <label htmlFor="inputUsername">Käyttäjänimi</label>
            <input
              id="inputUsername"
              className="form-control"
              type="text"
              value={username}
              onChange={() => setUsername(username)}
              required
              autoFocus
            />
            <label htmlFor="inputPassword">Salasana</label>
            <input
              id="inputPassword"
              className="form-control"
              type="password"
              value={password}
              onChange={() => setPassword(password)}
              required
            />
            <button className="btn btn-md btn-primary btn-block" type="submit">
              Kirjaudu
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
