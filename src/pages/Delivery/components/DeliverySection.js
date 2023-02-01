import React from "react"
import Title from "../../../components/Title"

import courier from "../../../images/delivery/courier.png"
import courier1 from "../../../images/delivery/courier1.png"
import mailbox from "../../../images/delivery/mailbox.png"
import box from "../../../images/delivery/box.png"

export default function DeliverySection() {
  return (
    <div className="dekivery">
      <div className="container">
        <Title>Доставка</Title>

        <p className="info">Время работы интернет-магазина круглосуточно 24/7</p>
        <p className="info">
          Подтверждение заказов по телефону - понедельник-пятница с 10:00 до 19:00
        </p>

        <div className="dekivery_block">
          <div className="dekivery_content">
            <h3>1. Курьерская доставка по г. Минску</h3>
            <ul>
              <li>- Оплата наличными при получении</li>
              <li>- Оплата банковской картой при получении</li>
              <li>- Онлайн платеж банковской картой через систему bePaid</li>
            </ul>

            <p>
              Доставка курьером производится в будние дни в промежутки времени 12:00-16:00 и
              18:00-22:00
            </p>
            <p>
              Бесконтактная курьерская доставка работает по г. Минску и ближайшим н.п. при
              онлайн-оплате заказа.
            </p>

            <h4>Стоимость доставки:</h4>
            <ul>
              <li>- при заказе до 49.99 руб. — 5 руб. </li>
              <li>- при заказе свыше 50 руб. доставка курьером БЕСПЛАТНАЯ</li>
            </ul>
          </div>

          <div className="dekivery_image">
            <img src={courier1} alt="" />
          </div>
        </div>

        <div className="dekivery_block">
          <div className="dekivery_content">
            <h3>2. Самовывоз заказа в Минске - бесплатно</h3>
            <ul>
              <li>- Онлайн платеж банковской картой на сайте</li>
              <li>- Оплата при получении</li>
            </ul>

            <h4>Для того чтобы самостоятельно забрать заказ, необходимо:</h4>
            <p>1. Оформить заказ на сайте или по телефону</p>
            <p>
              2. Вам придёт SMS-оповещение о готовности заказа к получению, срок хранения заказа 5
              дней
            </p>
            <h4>Самовывоз осуществляется: 10:00-21:00, по адресам:</h4>
            <p>г. Минск пр-т Партизанский, 54</p>
            <p>г. Минск ул. П. Мстиславца, 20</p>
            <p>г. Минск, Комаровский рынок, 2-ой этаж пав. 99</p>
          </div>
          <div className="dekivery_image">
            <img src={courier} alt="" />
          </div>
        </div>

        <div className="dekivery_block">
          <div className="dekivery_content">
            <h3>3. Доставка Белпочтой по всей РБ</h3>
            <ul>
              <li>- Оплата наложенным платежом при получении на почте</li>
              <li>- Онлайн платеж банковской картой через систему bePaid</li>
            </ul>
            <h4>Доставка до почтового отделения:</h4>
            <ul>
              <li>- при заказе до 1кг — 4,8 руб.</li>
              <li>- при заказе от 1 до 3кг — 9,06 руб.</li>
              <li>- при заказе свыше 3кг — 12,06 руб.</li>
            </ul>
            <h4>Доставка до двери:</h4>
            <ul>
              <li>- при заказе до 1кг — 7,38 руб.</li>
              <li>- при заказе от 1 до 3кг — 10,92 руб. </li>
              <li>- при заказе свыше 3кг — 14,52 руб.</li>
            </ul>
            <p>
              Тарифы установлены в соответствии с{" "}
              <a
                href="https://belpost.by/Tarify2/TarifyRUPBelpochta/Tarifyyur/TarifynapaketyuslugE-comm"
                target="_blank"
                rel="noreferrer"
              >
                тарифами РУП Белпочта.
              </a>
            </p>
            <p>
              Доставка в другие населённые пункты РБ осуществляется почтой в течение 3-4 дней со дня
              заказа.
            </p>
          </div>
          <div className="dekivery_image">
            <img src={mailbox} alt="" />
          </div>
        </div>

        <div className="dekivery_block">
          <div className="dekivery_content">
            <h3>4. Доставка Европочтой по всей РБ</h3>
            <ul>
              <li>- Оплата наложенным платежом при получении</li>
              <li>- Онлайн платеж банковской картой через систему bePaid</li>
            </ul>
            <h4>Доставка до отделения Европочты:</h4>
            <ul>
              <li>- при заказе от 0 до 2кг — 3,59 руб. </li>
              <li>- при заказе от 2 до 10кг — 4,79 руб</li>
              <li>- при заказе от 10 до 20кг — 7,19 руб.</li>
              <li>- при заказе от 20 до 30кг — 10,19 руб.</li>
              <li>- при заказе от 30 до 35кг — 28,79 руб.</li>
              <li>- при заказе от 35 до 40кг — 28,79 руб.</li>
              <li>- при заказе от 40 до 45кг — 32,39 руб.</li>
              <li>- при заказе от 45 до 50кг — 32,39 руб.</li>
            </ul>
          </div>
          <div className="dekivery_image">
            <img src={box} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
