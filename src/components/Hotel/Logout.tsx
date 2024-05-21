import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import { Button } from "./Logout.module.scss"

const Logout: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <button
      className={Button}
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin + "/hotel" },
        })
      }
    >
      Logout
    </button>
  )
}

export default Logout
