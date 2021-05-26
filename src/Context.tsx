import { createContext } from "react"

export const TokenContext = createContext({
  token: "",
// eslint-disable-next-line
  setToken: (_: string) => {},
})
