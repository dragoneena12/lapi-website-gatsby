import React from "react"
import Convert from "xml-js"

import Heading from "../common/Heading"
import data from "../../../data/feed"
import { Container, Card, Link } from "./Feed.module.scss"

type Feed = {
  rss: {
    channel: {
      item: {
        description: {
          _cdata: string
        }
        enclosure: {
          _attributes: {
            url: string
          }
        }
        link: {
          _text: string
        }
        title: {
          _cdata: string
        }
        pubDate: {
          _text: string
        }
      }[]
    }
  }
}

const Feed: React.FC = () => {
  const feed = Convert.xml2js(data, { compact: true }) as Feed
  return (
    <>
      <Heading>Articles</Heading>
      <div className={Container}>
        {feed?.rss.channel.item.map(item => (
          <div key={item.title._cdata} className={Card}>
            <a
              href={item.link._text}
              className={Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.enclosure._attributes.url}
                alt={item.title._cdata}
                width="100%"
              />
              <h3>{item.title._cdata}</h3>
            </a>
            <p>{new Date(item.pubDate._text).toDateString()}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Feed
