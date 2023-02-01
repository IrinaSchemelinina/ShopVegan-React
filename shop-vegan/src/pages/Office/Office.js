import React from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"

import "./office.css"

import signup from "../../images/signup.png"
import login from "../../images/login.png"

export default function Office () {
    return (
      <div className="registration">
          <div className="container">
            
            <div className="icon">
              <a className="modal-show icon-btn" href="#signup">
                <img src={signup} alt="" />
                <p>Регистрация</p>
              </a>

              <a className="modal-show icon-btn" href="#login">
                <img src={login} alt="" />
                <p>Вход</p>
              </a>
            </div>

            <Signup />
            <Login />

          </div>
      </div>
    )
  }
