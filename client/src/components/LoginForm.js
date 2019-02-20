import React from 'react'

const LoginForm = ({ values, login, handleChange }) => {
  return (
    <div className="login">
      <form className="form-signin" onSubmit={login}>
        <label htmlFor="inputUsername">Käyttäjänimi</label>
        <input
          id="inputUsername"
          className="form-control"
          type="text"
          placeholder="Käyttäjänimi"
          name="username"
          value={values.username}
          onChange={e => handleChange(e)}
          required
          autoFocus
          autoComplete="off"
        />
        <label htmlFor="inputPassword">Salasana</label>
        <input
          id="inputPassword"
          className="form-control"
          type="password"
          placeholder="Salasana"
          name="password"
          value={values.password}
          onChange={e => handleChange(e)}
          required
          autoComplete="off"
        />
        <button className="btn btn-md btn-primary btn-block" type="submit">
          Kirjaudu
        </button>
      </form>
    </div>
  )
}

export default LoginForm
