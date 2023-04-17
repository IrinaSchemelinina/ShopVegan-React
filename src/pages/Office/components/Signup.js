import React, { useState } from "react"
import Popup from "../../../components/Popup"
import { getUsersFromLocalStorage, setUsersInLocalStorage } from "../../../utils"

export default function Signup () {
  const [inputValues, setInputValues] = useState({
    name: "",
    password: "",
    email: "",
    birthday: "",
    sex: "man",
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
    if (user && user[0]?.email === inputValues.email) {
      alert("Такой пользователь уже существует")
      return
    }
    setUsersInLocalStorage(inputValues)
    alert("Вы зарегистрированы")
    window.location.assign("#login")
  }

  return (
    <Popup id="signup">
      <form onSubmit={handleSubmit}>
        <div className="signup">
          <h2>Регистрация</h2>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={inputValues.name}
              onChange={handleChange}
            />
          </div>  
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={inputValues.password}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Адрес электронной почты</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">День рождения</label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              value={inputValues.birthday}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox-block">
            <label>Пол</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="man"
                  name="sex"
                  className="checkbox"
                  defaultChecked={inputValues.sex === "man"}
                  onChange={handleChange}
                />
                Муж.
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="woman"
                  name="sex"
                  className="checkbox"
                  defaultChecked={inputValues.sex === "woman"}
                  onChange={handleChange}
                />
                Жен.
              </label>
            </div>
          </div>
          <button type="submit" className="registration-btn">Отправить</button>
        </div>
      </form>
    </Popup>
  )
}
