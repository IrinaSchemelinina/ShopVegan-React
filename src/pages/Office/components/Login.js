import React, { useState } from "react"
import Popup from "../../../components/Popup"
import { getUsersFromLocalStorage, setLoginnedUserToLocalStorage } from "../../../utils"

export default function Login () {
  const [inputValues, setInputValues] = useState({
    password: "",
    email: "",
  })

  const handleChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValues.password === "" || inputValues.email === "") {
      alert("Заполните почту и пароль")
      return
    }
    const user = getUsersFromLocalStorage(inputValues.email)
    if (!user.length) {
      alert("Такого пользователя не существует")
      return
    }
    if (user[0].password !== inputValues.password) {
      alert("Неправильный пароль")
      return
    }
    setLoginnedUserToLocalStorage(inputValues.email)
    alert("Вы вошли")
    window.location.assign("/")
  }

    return (
      <Popup id="login">
        <form onSubmit={handleSubmit}>
          <div className="login">
            <h2>Вход</h2>
            <div className="form-group">
              <label htmlFor="login-email">Адрес электронной почты</label>
              <input
                type="email"
                className="form-control"
                id="login-email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Пароль</label>
              <input
                type="password"
                className="form-control"
                id="login-password"
                name="password"
                autoComplete="off"
                value={inputValues.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="registration-btn login-btn">Войти</button>
          </div>
        </form>
      </Popup>
    )
  }
