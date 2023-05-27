import React, { memo } from "react"

export function ProductItem({
  image,
  title,
  price,
  priceOld,
  id,
  vendor,
  inCart,
  addToCart,
  goToCart,
}) {
  const pathForProductPopup = "#popup_products" + id
  const pathForProduct = "/product/" + id

  const handleAddToCart = () => {
    addToCart(id)
  }

  return (
    <div className="products-grid_item">
      <article className="product">
        <div className="image_switch_img">
          <a href={pathForProductPopup}>
            <img src={image} alt={title} />
          </a>
        </div>
        <h3 className="product_title">
          <a href={pathForProduct}>{title}</a>
        </h3>
        <div className="product_price">
          <span className="product-price_current">{price} р</span>
          {!!priceOld && <span className="product-price_old">{priceOld} р</span>}
        </div>
        <button
          className={`product_btn btn ${inCart ? "active" : ""}`}
          onClick={inCart ? goToCart : handleAddToCart}
        >
          {inCart ? "В корзине" : "Добавить в корзину"}
        </button>
      </article>
    </div>
  )
}

export default memo(ProductItem)
