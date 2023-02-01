import React, { useLayoutEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { categoryData } from "../config/categoryData"
import { checkIsLoginned} from "../utils"
import { initBasket } from "../utils/initBasket"

import "./smartbasket.min.css"

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

  useLayoutEffect(() => {
    initBasket()
    return () => {
      [...document.getElementsByClassName("smart-basket__min")].forEach(i => i.remove())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const mainCategory = categoryData.filter(item => (item.name === "products"))[0]
  const { title, url } = mainCategory
  const subCategoryList = categoryData.filter(item => (item.name !== "products"))
  const isLoginned = checkIsLoginned()

  return (
    <header className={`header ${fixed ? "header_fixed" : ""}`}>
      <div className="container">
        <div className="header_inner">
          <button onClick={toggleShowMenu} className="menu-burger">
            <img src={menuImg} alt="" />
          </button>
          <nav className="menu">
            <ul className={`menu_list ${showMenu ? "show-menu" : ""}`}>
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
            <span className="cart">
              <img src={cartImg} alt="" />
              <div className="cart-numbers" />
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
