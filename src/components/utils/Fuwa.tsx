import React from "react"
import { useInView } from "react-intersection-observer"

import * as classes from "./Fuwa.module.scss"

const Fuwa: React.FC = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={inView ? classes.FuwaActive : classes.Fuwa}>
      {children}
    </div>
  )
}

export default Fuwa
