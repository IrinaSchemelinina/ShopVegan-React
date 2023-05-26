import React, { useState, useEffect } from "react";
import Popup from "../../components/Popup";

export default function BasketInfoPopup ({ isAlreadyAdded, isShow, onClose, onGoToCart }) {
  const [isShowPopup, setIsShowPopup] = useState(isShow)

  useEffect(() => {
    setIsShowPopup(isShow)
  }, [isShow])

  return (
    <Popup isShow={isShowPopup} noPadding onClose={onClose}>
      <div className="smart-basket__alert">
        <div className="smart-basket__alert-icon">
          {isAlreadyAdded ? (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle className="path circle" fill="none" stroke="#D06079" strokeWidth="6" strokeMiterlimit="10" cx="65.1"
                cy="65.1" r="62.1"></circle>
              <line className="path line" fill="none" stroke="#D06079" strokeWidth="6" strokeLinecap="round"
                strokeMiterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"></line>
              <line className="path line" fill="none" stroke="#D06079" strokeWidth="6" strokeLinecap="round"
                strokeMiterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"></line>
            </svg>
          ) : (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1"
                cy="65.1" r="62.1"></circle>
              <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round"
                strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline>
            </svg>
          )}
        </div>
        <div className="smart-basket__alert-text">
          {isAlreadyAdded ? "Товар уже добавлен в корзину" : "Товар добавлен в корзину"}
        </div>
        <div className="smart-basket__alert-footer">
          <button className="smart-basket__alert-button smart-basket__alert-button_close" onClick={onClose}>Продолжить покупки</button>
          <button className="smart-basket__alert-button smart-basket__alert-button_by" onClick={onGoToCart} >В корзину</button>
        </div>
      </div>
    </Popup>
  )
}
