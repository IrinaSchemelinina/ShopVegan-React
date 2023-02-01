import React from "react"

import leafImg from "../images/leaf.png"

export default function Title ({ children, tag = "h2" }) {
  const Tag = tag

  return (
    <div>
      <Tag>{children}</Tag>
      <img className="leaf" src={leafImg} alt="" />
    </div>
  )
}
