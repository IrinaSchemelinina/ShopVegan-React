import React from "react"
import Title from "../../components/Title"
import { checkLoginnedUser, getUsersFromLocalStorage, logout } from "../../utils"

import "./cabinet.css"


export default function Cabinet () {
  const handleLogout = () => {
    logout()
    alert("Вы вышли")
    window.location.assign("/")
  }
  const userEmail = checkLoginnedUser()
  const { name, email, birthday, sex } = getUsersFromLocalStorage(userEmail)[0]

  return (
    <div className="container">
      <Title>Страница Пользователя</Title>
      <div className="cabinet-info">
        <div className="cabinet-info-row"><strong>Имя</strong><span>{name}</span></div>
        <div className="cabinet-info-row"><strong>Email</strong><span>{email}</span></div>
        <div className="cabinet-info-row"><strong>Дата рождения</strong><span>{birthday}</span></div>
        <div className="cabinet-info-row"><strong>Пол</strong><span>{sex === "woman" ? "Женский" : "Мужской"}</span></div>
      </div>
      <button
        className="btn-logout"
        onClick={handleLogout}
      >
        Выйти из личного кабинета
      </button>
    </div>
  )
}
