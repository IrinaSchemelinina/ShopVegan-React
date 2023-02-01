import React from "react"

import closeImg from "../images/close.png"

export default function Popup ({
  id,
  children,
  className,
  contentClassName,
}) {
  return (
    <div className={`popup ${className || ""}`} id={id}>
      <a href="#header" className="popup_area">.</a>
      <div className="popup_body">
          <div className={`popup_content ${contentClassName || ""}`}>
              <a href="#header" className="popup_close"><img src={closeImg} alt="close" /></a>
              <div className="popup_text">
                  {children}
              </div>
          </div>
      </div>
  </div>
  )
}
