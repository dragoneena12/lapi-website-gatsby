import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import {Button} from "./Login.module.scss"

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button className={Button} onClick={() => loginWithRedirect()}>
      Login / SignUp
    </button>
  )
}

export default Login
