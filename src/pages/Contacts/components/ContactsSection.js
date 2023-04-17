import React from "react"
import Title from "../../../components/Title"

import shop1 from "../../../images/contacts/shop1.jpg"
import shop2 from "../../../images/contacts/shop2.jpg"
import shop3 from "../../../images/contacts/shop3.jpg"
import Popup from "../../../components/Popup"

export default function ContactsSection() {
  return (
    <div className="contacts">
      <div className="container">
        <Title>Наши магазины</Title>

        <div className="shop">
          <div className="shop_block">
            <div className="shop1_img">
              <img src={shop1} alt="Фото магазина" />
            </div>

            <div className="shop_address">
              <p>
                <b>Адрес:</b> г. Минск пр-т Партизанский, 54
              </p>
              <p>
                <b>Номер телефона:</b>
              </p>
              <a href="tel:+375333428798">+375 (33) 342-87-98</a>
              <p>
                <a href="tel:+375291278108">+375 (29) 127-81-08</a>
              </p>
            </div>
          </div>

          <div className="shop_nav">
            <button className="btn_map">
              <a href="#map">
                Мы здесь на карте
              </a>
            </button>
            <a href="#popup">
              <button className="btn_chart">График работы</button>
            </a>
          </div>
        </div>

        <div className="shop">
          <div className="shop_block">
            <div className="shop2_img">
              <img src={shop2} alt="Фото магазина" />
            </div>

            <div className="shop_address">
              <p>
                <b>Адрес:</b> г. Минск ул. П. Мстиславца, 20
              </p>
              <p>
                <b>Номер телефона:</b>
              </p>
              <a href="tel:+375293411108">+375 (29) 341-11-08</a>
            </div>
          </div>

          <div className="shop_nav">
            <button className="btn_map">
              <a href="#map">
                Мы здесь на карте
              </a>
            </button>
            <a href="#popup">
              <button className="btn_chart">График работы</button>
            </a>
          </div>
        </div>

        <div className="shop">
          <div className="shop_block">
            <div className="shop3_img">
              <img src={shop3} alt="Фото магазина" />
            </div>
            <div className="shop_address">
              <p>
                <b>Адрес:</b> г. Минск, Комаровский рынок, 2-ой этаж пав. 99
              </p>
              <p>
                <b>Номер телефона:</b>
              </p>
              <a href="tel:+375291774108">+375 (029) 177-41-08</a>
            </div>
          </div>

          <div className="shop_nav">
            <button className="btn_map">
              <a href="#map">
                Мы здесь на карте
              </a>
            </button>
            <a href="#popup">
              <button className="btn_chart">График работы</button>
            </a>
          </div>
        </div>

        <Popup id="popup">
          <table>
            <tbody>
              <tr>
                <th>День</th>
                <th>Время работы</th>
              </tr>
              <tr>
                <td>Понедельник</td>
                <td>10:00 - 19:00</td>
              </tr>
              <tr>
                <td>Вторник</td>
                <td>10:00 - 19:00</td>
              </tr>
              <tr>
                <td>Среда</td>
                <td>10:00 - 19:00</td>
              </tr>
              <tr>
                <td>Четверг</td>
                <td>10:00 - 19:00</td>
              </tr>
              <tr>
                <td>Пятница</td>
                <td>10:00 - 19:00</td>
              </tr>
              <tr>
                <td>Суббота</td>
                <td>10:00 - 15:00</td>
              </tr>
              <tr>
                <td>Воскресенье</td>
                <td>Выходной</td>
              </tr>
            </tbody>
          </table>
          <p>*Время указано для региона: Беларусь, Минск</p>
        </Popup>
        <Popup id="map">
          <div className="popup-map">
            <iframe
              title="map"
              src="https://yandex.by/map-widget/v1/?ll=27.629939%2C53.874520&mode=usermaps&source=constructorLink&um=constructor%3A3263bccad95543fb345f13383f4591f017f118288dcea89e31e6eb7c35f90753&z=19"
              width="560"
              height="400"
              frameBorder="1"
              allowFullScreen={true}
            />
          </div>
        </Popup>
      </div>
    </div>
  )
}
