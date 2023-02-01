import React from "react";
import { Link, NavLink } from "react-router-dom";

import logoFooter from "../images/vegan-logo_footer.png";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";

const text = `
  ИП Спиридонов Андрей Андреевич</br>
  УНП 192770026</br>
  Свидетельство о государственной регистрации выдано Минским горисполкомом 6 февраля 2017 г.</br>
  Юридический адрес: РБ, г. Минск</br>
  Ул. Притыцкого 92-59</br>
  Р/С BY58 ALFA 3013 2793 9400 1027 0000</br>
  ЗАО "АЛЬФА-БАНК"</br>
  Юридический адрес: Ул. Сурганова, 43-47, 220013 Минск
`;

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_inner">
          <div className="footer_info">
            <Link to="/">
              <img src={logoFooter} alt="logo" />
            </Link>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="footer-block">
            <nav className="footer_menu">
              <h4>Меню сайта:</h4>
              <NavLink className="footer_menu-link" to="/products">
                Товары
              </NavLink>
              <NavLink className="footer_menu-link" to="/delivery">
                Доставка и оплата
              </NavLink>
              <NavLink className="footer_menu-link" to="/contacts">
                Контакты
              </NavLink>
            </nav>
            <div className="footer_social">
              <div className="footer_social-link">
                <h4>Мы в сети:</h4>
                <p>
                  Email:{" "}
                  <a
                    className="footer_social-email"
                    href="mailto:oyasim@email.com"
                  >
                    oyasim@email.com
                  </a>
                </p>
              </div>
              <div className="footer_social-list">
                <a
                  className="facebook"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebookIcon} alt="" />
                </a>
                <a
                  className="twitter"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitterIcon} alt="" />
                </a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
