import React, { useState, useEffect } from "react"

import Heading from "../common/Heading"
import { Container, Card, Link } from "./Feed.module.scss"

type FeedResp = {
  items: {
    description: string
    enclosure: {
      link: string
    }
    link: string
    title: string
    pubDate: string
  }[]
}

const Feed: React.FC = () => {
  const [data, setData] = useState<FeedResp>()
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/lapi/feed"
    )
      .then(r => {
        r.json().then((feed: FeedResp) => {
          setData(feed)
        })
      })
      .catch(e => {
        console.error(e)
      })
  })
  return (
    <>
      <Heading>Articles</Heading>
      <div className={Container}>
        {data?.items.map(item => (
          <div key={item.title} className={Card}>
            <a
              href={item.link}
              className={Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.enclosure.link} alt={item.title} width="100%" />
              <h3>{item.title}</h3>
            </a>
            <p>{new Date(item.pubDate).toDateString()}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Feed
