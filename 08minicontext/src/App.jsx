import React from 'react'
import UserContextProvidor from './Context/UserContextProvidor'
import Login from './Componenets/Login'
import Profile from './Componenets/Profile'

function App() {

  return (
    <UserContextProvidor>
      <h1>hey</h1>
      <Login/>
      <Profile/>
    </UserContextProvidor>
  )
}

export default App
