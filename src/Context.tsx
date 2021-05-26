import { createContext } from "react"

// eslint-disable-next-line
export const TokenContext = createContext({
  token: "",
  setToken: (_: string) => {},
})
