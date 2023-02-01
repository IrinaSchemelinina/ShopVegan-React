import React, { useState } from "react"
import Pagination from "../../components/Pagination"
import ProductItem from "../../components/ProductItem"
import ProductPopup from "../../components/ProductPopup"
import Title from "../../components/Title"
import { productData } from "../../config/productData"
import Search from "./components/Search"

const perPage = 9

export default function Products({ name, title }) {
  const initialProducts =
    name === "products" ? productData : productData.filter((item) => item.category === name)

  const [currentPage, setCurrentPage] = useState(1)
  const [productList, setProductList] = useState(initialProducts)
  const [showFrom, setShowFrom] = useState(0)
  const [showTo, setShowTo] = useState(perPage)
  const numPages = Math.ceil(productList.length / perPage)

  const onPageClick = (pageNumber) => {
    const newShowFrom = perPage * (pageNumber - 1)
    setShowFrom(newShowFrom)
    setShowTo(newShowFrom + perPage)
    setCurrentPage(pageNumber)
  }

  const onSearch = (productData) => {
    onPageClick(1)
    setProductList(productData)
  }

  const productListtoShow = productList.slice(showFrom, showTo)

  return (
    <div className="pagination_products">
      <div className="container">
        <Title tag="h1">{title}</Title>
        <Search productData={initialProducts} onSearch={onSearch} />
        <div className="products-content grid-container">
          <div className="products-grid" id="results">
            {productListtoShow.map((item) => (
              <ProductItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        {numPages > 1 && (
          <Pagination
            numPages={numPages}
            onPageClick={onPageClick}
            currentPage={currentPage}
          />
        )}
      </div>
      {productListtoShow.map((item) => (
        <ProductPopup key={item.title} {...item} />
      ))}
    </div>
  )
}
