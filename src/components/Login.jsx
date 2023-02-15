import React from 'react'
import { useAuth } from '../provider/auth'

const Login = () => {

    const handleLogin = () => {
        const user = {name: "denisson"}
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
    }

    const { setUser } = useAuth()

  return (
    <div>
        <button onClick={handleLogin}>mudar</button>
    </div>
  )
}

export default Login