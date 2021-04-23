import React from "react"
import { useInView } from "react-intersection-observer"

import classes from "./Fuwa.module.scss"

const Fuwa: React.FC = ({children}) => {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className={inView ? classes.FuwaActive : classes.Fuwa}>
      {children}
    </div>
  )
}

export default Fuwa
