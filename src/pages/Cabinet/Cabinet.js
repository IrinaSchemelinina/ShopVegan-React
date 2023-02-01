import React from "react"
import Title from "../../components/Title"
import { logout } from "../../utils"


export default function Cabinet () {
  const handleLogout = () => {
    logout()
    alert("Вы вышли")
    window.location.assign("/")
  }

  return (
    <div className="container">
      <Title>Страница Пользователя</Title>
      <button
        className="btn-logout"
        onClick={handleLogout}
      >
        Выйти из личного кабинета
      </button>
    </div>
  )
}
