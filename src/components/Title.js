import React from "react"

import leafImg from "../images/leaf.png"

export default function Title ({ children, tag = "h2", forwardRef }) {
  const Tag = tag

  return (
    <div ref={forwardRef} style={{ width: "100%" }}>
      <Tag>{children}</Tag>
      <img className="leaf" src={leafImg} alt="" />
    </div>
  )
}
