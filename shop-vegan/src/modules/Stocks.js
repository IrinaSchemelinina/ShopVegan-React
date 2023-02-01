import React from "react"
import SliderProducts from "../components/SliderProducts"
import Title from "../components/Title"
import { productData } from "../config/productData"


export default function Stocks () {
  const products = productData.filter(item => (item.category === "stocks"))

  return (
    <div className="stocks">
      <div className="container">
          <Title>Акционные товары</Title>
          <SliderProducts config={products} />
      </div>
  </div>
  )
}
