import React from "react"
import Popup from "./Popup"

export default function ProductPopup ({
  image,
  title,
  price,
  id,
  vendor,
  text,
  inCart,
  addToCart,
  removeFromCart,
}) {
  const idForProduct = "popup_products" + id

  const handleAddToCart = () => {
    addToCart(id)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(id)
  }

  return (
    <Popup className="popup_card" contentClassName="popup_card-content products-grid_item" id={idForProduct}>
      <div className="popup_card-info">
          <div className="popup_card-image"><img src={image} alt={title} /></div>
          <div className="popup_card-description">
              <h2>{title}</h2>
              <div className="popup_card-text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
      </div>

      <div className="popup_card-price">
          <div className="product-price_current">{price} p.</div>
          <button
              className={`product_btn btn ${inCart ? "active" : ""}`}
              onClick={inCart ? handleRemoveFromCart : handleAddToCart}
            >
            {inCart ? "В корзине" : "Добавить в корзину"}
          </button>
      </div>
    </Popup>
  )
}
