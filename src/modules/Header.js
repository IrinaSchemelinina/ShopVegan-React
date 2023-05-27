import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { categoryData } from "../config/categoryData"
import { checkLoginnedUser} from "../utils"
import { CartContext } from "../context/CartContext"

import "./Basket/smartbasket.min.css"

import menuImg from "../images/menu.png"
import arrowImg from "../images/arrow.png"
import userImg from "../images/user3.png"
import userIcon from "../images/user.png"
import logo from "../images/vegan-logo.jpg"
import cartImg from "../images/shopping-cart.png"

export default function Header() {
  const { pathname } = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const [fixed, setFixed] = useState(false)
  const menuListRef = useRef(null)
  const burgerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useLayoutEffect(() => {
    document.addEventListener("scroll", fixHeader)
    return () => {
      document.removeEventListener("scroll", fixHeader)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function fixHeader() {
    if (window.pageYOffset > 300) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  const closeMenu = useCallback(
    (e) => {
      if (
        showMenu && 
        !burgerRef.current.contains(e.target) &&
        !menuListRef.current.contains(e.target)
      ) {
        setShowMenu(false)
      }
    },
    [showMenu],
  )

  useEffect(() => {
    document.addEventListener("click", closeMenu)
    return () => {
      document.removeEventListener("click", closeMenu)
    }
  }, [closeMenu])

  const mainCategory = categoryData.filter(item => (item.name === "products"))[0]
  const { title, url } = mainCategory
  const subCategoryList = categoryData.filter(item => (item.name !== "products"))
  const isLoginned = checkLoginnedUser()
  const { productIdsInCart, goToCart } = useContext(CartContext)
  const cartItems = Object.keys(productIdsInCart).length

  return (
    <header className={`header ${fixed ? "header_fixed" : ""}`}>
      <div className="container">
        <div className="header_inner">
          <button onClick={toggleShowMenu} className="menu-burger" ref={burgerRef}>
            <img src={menuImg} alt="" />
          </button>
          <nav className="menu">
            <ul className={`menu_list ${showMenu ? "show-menu" : ""}`} ref={menuListRef}>
              <li className="menu_list-item">
                <NavLink className="menu_list-link" to={url}>
                  {title}
                </NavLink>
                <img className="menu_arrow arrow" src={arrowImg} alt="иконка стрелка" />
                <ul className="submenu_list">
                    {subCategoryList.map(({ id, title, url }) => (
                      <li className="submenu_list-item" key={id}>
                        <NavLink onClick={toggleShowMenu} className="submenu_list-link" to={url}>
                          {title}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </li>
              <li className="menu_list-item">
                <NavLink onClick={toggleShowMenu} className="menu_list-link" to="/delivery">
                  Доставка и оплата
                </NavLink>
              </li>
              <li className="menu_list-item">
                <NavLink onClick={toggleShowMenu} className="menu_list-link" to="/contacts">
                  Контакты
                </NavLink>
              </li>
              <li className="menu-burger_account">
                <NavLink onClick={toggleShowMenu} to={isLoginned ? "/cabinet" : "/office"}>
                  <button className="btn-burger_account">
                    <img src={userImg} alt="user" />
                    <span>{isLoginned ? "Аккаунт" : "Вход"}</span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>

          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <nav className="menu">
            <span
              className="cart"
              role="none"
              onClick={cartItems ? goToCart : undefined}
            >
              <img src={cartImg} alt="" />
              <div className="cart-numbers">{cartItems}</div>
            </span>
            <NavLink to={isLoginned ? "/cabinet" : "/office"}>
              <button className="account">
                <img src={userIcon} alt="user" />
                <span>{isLoginned ? "Аккаунт" : "Вход"}</span>
              </button>
            </NavLink>
          </nav>
          <div className="smart-basket__wrapper"></div>
        </div>
      </div>
    </header>
  )
}
