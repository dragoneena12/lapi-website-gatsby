import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import { Button } from "./Login.module.scss"

const Logout: React.FC = () => {
  const { logout  } = useAuth0()

  return (
    <button className={Button} onClick={() => logout({ returnTo: window.location.origin + "/hotel/" })}>
      Logout
    </button>
  )
}

export default Logout
