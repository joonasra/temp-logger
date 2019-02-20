import React from 'react'

const Profile = ({ user }) => {
  return (
    <div>
      <h3>Käyttäjäprofiili</h3>
      <div>Käyttäjänimi: {user.username}</div>
      <div>Käyttäjän token: {user.token}</div>
    </div>
  )
}

export default Profile
