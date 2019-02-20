import React from 'react'

const Navigation = ({ logout, changeScreen }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <span className="navbar-brand">Temp logger</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigationbar"
          aria-controls="navigationbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navigationbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <span className="nav-link" onClick={() => changeScreen('data')}>
                Sensoridata
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => changeScreen('profile')}
              >
                Käyttäjä
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => changeScreen('about')}>
                Tietoa
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={logout}>
                Kirjaudu ulos
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
