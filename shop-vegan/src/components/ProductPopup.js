import React from "react"
import Popup from "./Popup"

export default function ProductPopup ({
  image,
  title,
  price,
  id,
  vendor,
  text,
}) {
  const idForProduct = "popup_products" + id

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
          <div className="product__quantity"></div>
          <button className="product_btn btn" 
              data-sb-id-or-vendor-code={vendor}
              data-sb-product-name={title}
              data-sb-product-price={price}
              data-sb-product-quantity="1"
              data-sb-product-img={image}>Добавить в корзину</button>
      </div>
    </Popup>
  )
}
