import React from "react"
import { Link } from "gatsby"

import { ButtonStyle } from "./Button.module.scss"

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
  href?: string
  external?: boolean
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = "button",
  href,
  external,
}) => {
  if (href !== undefined) {
    return external ? (
      <a
        className={ButtonStyle}
        href={href}
        target="_blank"
        rel="noopenner noreferrer"
      >
        {children}
      </a>
    ) : (
      <Link className={ButtonStyle} to={href}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={ButtonStyle} onClick={onClick} type={type}>
        {children}
      </button>
    )
  }
}

export default Button
