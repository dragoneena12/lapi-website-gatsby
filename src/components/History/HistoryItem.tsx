import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"

import Button from "../common/Button"
import Badge from "./Badge"
import {
  BadgeContainer,
  Modal,
  BackDrop,
  BackDropActive,
  Description,
} from "./HistoryItem.module.scss"

type Props = {
  startDate: Date
  endDate: Date
  name: string
  eventURL: string
  imageURL: string[]
  tags: string[]
  description: JSX.Element
}

const HistoryItem: React.FC<Props> = props => {
  const eventDate =
    props.startDate.getTime() === props.endDate.getTime()
      ? props.startDate.toLocaleDateString()
      : props.startDate.toLocaleDateString() +
        " 〜 " +
        props.endDate.toLocaleDateString()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [show])

  const eventURL = props.eventURL ? (
    <Button href={props.eventURL} external>
      イベントページへ
    </Button>
  ) : null

  return (
    <>
      <tr onClick={handleShow}>
        <td>{eventDate}</td>
        <td>{props.name}</td>
        <td>
          <div className={BadgeContainer}>
            {props.tags.map(tag => (
              <Badge key={tag} value={tag} />
            ))}
          </div>
        </td>
      </tr>

      <div
        className={show ? BackDropActive : BackDrop}
        onClick={handleClose}
        onKeyPress={handleClose}
        role="button"
        tabIndex={0}
      />
      {show && (
        <div className={Modal}>
          <h2>{props.name}</h2>
          <p>
            {props.imageURL.length ? (
              <Carousel dynamicHeight>
                {props.imageURL.map(URL => (
                  <div key={URL}>
                    <img src={URL} alt={URL} />
                  </div>
                ))}
              </Carousel>
            ) : (
              <Carousel dynamicHeight>
                {(<img src="/img/history/no_image.jpg" alt="noImage" />) as any}
              </Carousel>
            )}
          </p>
          <p className={Description}>{props.description}</p>
          {eventURL}
          <Button onClick={handleClose}>Close</Button>
        </div>
      )}
    </>
  )
}
export default HistoryItem
