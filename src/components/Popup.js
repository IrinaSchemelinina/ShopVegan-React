import React from "react"

import closeImg from "../images/close.png"

export default function Popup ({
  id,
  children,
  className,
  contentClassName,
  noPadding,
  isShow = false,
  onClose,
}) {
  return (
    <div className={`popup ${className || ""} ${isShow ? "show" : ""}`} id={id}>
      <a href="#header" className="popup_area" onClick={onClose}>.</a>
      <div className="popup_body">
          <div className={`popup_content ${contentClassName || ""}`}>
              <a
                href="#header"
                className="popup_close"
                onClick={onClose}
                >
                  <img src={closeImg} alt="close" />
                </a>
              <div className={`popup_text ${noPadding ? "noPadding" : ""}`}>
                  {children}
              </div>
          </div>
      </div>
  </div>
  )
}
