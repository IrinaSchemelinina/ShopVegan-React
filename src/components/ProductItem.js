import React from "react"

export default function ProductItem({ image, title, price, priceOld, id, vendor }) {
  const idForProduct = "#popup_products" + id

  return (
    <div className="products-grid_item">
      <article className="product">
        <div className="image_switch_img">
          <a href={idForProduct}>
            <img src={image} alt={title} />
          </a>
        </div>
        <h3 className="product_title">
          <a href={idForProduct}>{title}</a>
        </h3>
        <div className="product_price">
          <span className="product-price_current">{price} р</span>
          {priceOld && <span className="product-price_old">{priceOld} р</span>}
        </div>

        <div className="product__quantity" />

        <button
          className="product_btn btn"
          data-sb-id-or-vendor-code={vendor}
          data-sb-product-name={title}
          data-sb-product-price={price}
          data-sb-product-quantity="1"
          data-sb-product-img={image}
        >
          Добавить в корзину
        </button>
      </article>
    </div>
  )
}
