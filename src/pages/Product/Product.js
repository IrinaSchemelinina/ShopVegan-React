import React, { useMemo, useContext, useCallback } from "react"
import { useParams } from "react-router-dom"
import Title from "../../components/Title"
import { CartContext } from "../../context/CartContext"
import { productData } from "../../config/productData"

import "./product.css"

export default function Product() {
  const { productId } = useParams()

  const {
    id,
    image,
    title,
    price,
    text,
    priceOld,
  } = useMemo(() => productData.find(item => item.id === Number(productId) | {}), [productId])

  const goBack = () => window.history.back()
  const { productIdsInCart, addToCart, goToCart } = useContext(CartContext)
  const inCart = !!productIdsInCart[id]

  const handleAddToCart = useCallback(
    () => {
      addToCart(id)
    },
    [addToCart, id],
  )

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
                className={`product-page_btn btn ${inCart ? "active" : ""}`}
                onClick={inCart ? goToCart : handleAddToCart}
              >
                {inCart ? "В корзине" : "Добавить в корзину"}
              </button>
            </div>
            <button className="product-page_back" onClick={goBack}>Вернуться назад</button>
        </div>
      </div>
    </div>
  )
}
