import React, { memo } from "react"
import SliderProducts from "../components/SliderProducts"
import Title from "../components/Title"
import { productData } from "../config/productData"

export function Popular() {
  const products = productData.filter(item => (item.category === "popular"))

  return (
    <div className="popular">
      <div className="container">
        <Title>Популярные товары</Title>
        <SliderProducts config={products} />
      </div>
    </div>
  )
}

export default memo(Popular)
