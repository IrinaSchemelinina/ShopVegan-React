import React, { useMemo } from "react"
import { useParams } from "react-router-dom"
import Title from "../../components/Title"
import { productData } from "../../config/productData"

import "./product.css"

export default function Product() {
  const { productId } = useParams()
  const {
    image,
    title,
    price,
    text,
    priceOld,
    vendor,
  } = useMemo(() => productData.find(item => item.id === Number(productId) | {}), [productId])

  const goBack = () => window.history.back()

  return (
    <div className="container product-page">
      <Title tag="h1">{title}</Title>
      <div className="product-page_content">
        <div className="product-page_image"><img src={image} alt={title} /></div>
        <div className="product-page_description">
            <h2>{title}</h2>
            <div className="product-page_text" dangerouslySetInnerHTML={{ __html: text }} />
            <div className="product-page_price">
              <span><strong>Цена: </strong></span>
              <span className="product-page_price--current">{price} р</span>
              {priceOld && <span className="product-page_price--old">{priceOld} р</span>}
            </div>
            <div>
              <button
                className="product-page_btn btn"
                data-sb-id-or-vendor-code={vendor}
                data-sb-product-name={title}
                data-sb-product-price={price}
                data-sb-product-quantity="1"
                data-sb-product-img={image}
              >
                Добавить в корзину
              </button>
            </div>
            <button className="product-page_back" onClick={goBack}>Вернуться назад</button>
        </div>
      </div>
    </div>
  )
}
