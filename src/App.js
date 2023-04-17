import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './modules/Header'
import Footer from './modules/Footer'
import Cabinet from './pages/Cabinet'
import Contacts from './pages/Contacts'
import Delivery from './pages/Delivery'
import Office from './pages/Office'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import { categoryData } from './config/categoryData'

import "./css/style.css"
import "./css/media.css"

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
