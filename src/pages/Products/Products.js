import React, { useEffect, useMemo, useState, useRef, useContext, memo } from "react"
import Pagination from "../../components/Pagination"
import ProductItem from "../../components/ProductItem"
import ProductPopup from "../../components/ProductPopup"
import Title from "../../components/Title"
import { productData } from "../../config/productData"
import Search from "./components/Search"
import { CartContext } from "../../context/CartContext"

const perPage = 9

export function Products({ name, title }) {
  const initialProducts = useMemo(() => {
    return name === "products" ? productData : productData.filter((item) => item.category === name)
  }, [name])

  const [currentPage, setCurrentPage] = useState(1)
  const [productList, setProductList] = useState(initialProducts)
  const [showFrom, setShowFrom] = useState(0)
  const [showTo, setShowTo] = useState(perPage)
  const numPages = Math.ceil(productList.length / perPage)
  const titleRef = useRef(null)
  const { productIdsInCart, addToCart, goToCart } = useContext(CartContext)
  const productListtoShow = useMemo(() => productList.slice(showFrom, showTo), [productList, showFrom, showTo])

  useEffect(() => {
    setProductList(initialProducts)
    onPageClick(1)
  }, [initialProducts])

  const onPageClick = (pageNumber) => {
    const newShowFrom = perPage * (pageNumber - 1)
    setShowFrom(newShowFrom)
    setShowTo(newShowFrom + perPage)
    setCurrentPage(pageNumber)
    titleRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const onSearch = (productData) => {
    onPageClick(1)
    setProductList(productData)
  }

  return (
    <div className="pagination_products">
      <div className="container">
        <Title tag="h1" forwardRef={titleRef}>{title}</Title>
        <Search productData={initialProducts} onSearch={onSearch} />
        <div className="products-content grid-container">
          <div className="products-grid" id="results">
            {productListtoShow.map((item) => (
              <ProductItem
                key={item.title}
                {...item}
                inCart={productIdsInCart[item.id]}
                addToCart={addToCart}
                goToCart={goToCart}
              />
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
        <ProductPopup
          key={item.title}
          {...item}
          inCart={productIdsInCart[item.id]}
          addToCart={addToCart}
          goToCart={goToCart}
        />
      ))}
    </div>
  )
}

export default memo(Products)
