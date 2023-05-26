import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './modules/Header'
import Footer from './modules/Footer'
import BasketInfoPopup from './modules/Basket/BasketInfoPopup'
import Cabinet from './pages/Cabinet'
import Contacts from './pages/Contacts'
import Delivery from './pages/Delivery'
import Office from './pages/Office'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import { categoryData } from './config/categoryData'
import useCartUtils from './utils/useCartUtils'
import BasketModal from './modules/Basket/Basket'
import { CartContext } from "./context/CartContext"

import "./css/style.css"
import "./css/media.css"

function App() {
  const {
    productIdsInCart,
    addToCart,
    removeFromCart,
    showCartInfoPopup,
    setShowCartInfoPopup,
    isAlreadyAdded,
    showCartPopup,
    setShowCartPopup,
    goToCart,
    clearAllCart,
  } = useCartUtils()

  const onGoToCart = () => {
    setShowCartInfoPopup(false)
    goToCart()
  }

  return (
    <Router>
      <CartContext.Provider
        value={{
          productIdsInCart,
          addToCart,
          removeFromCart,
          showCartInfoPopup,
          setShowCartInfoPopup,
          goToCart,
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/office' element={<Office />} />
          <Route path='/cabinet' element={<Cabinet />} />
          <Route path='/product/:productId' element={<Product />} />
          {categoryData.map((category) => {
            const { id, url } = category
            return (
              <Route key={id} path={url} element={<Products {...category} />} />
            )
          })}
        </Routes>
        <Footer />
        <BasketInfoPopup
          isShow={showCartInfoPopup}
          isAlreadyAdded={isAlreadyAdded}
          onClose={() => setShowCartInfoPopup(false)}
          onGoToCart={onGoToCart}
        />
        <BasketModal
          itemIds={productIdsInCart}
          isShowPopup={showCartPopup}
          onClose={() => setShowCartPopup(false)}
          onDelete={(id) => removeFromCart(id)}
          onClearCart={clearAllCart}
        />
      </CartContext.Provider>
    </Router>
  )
}

export default App
