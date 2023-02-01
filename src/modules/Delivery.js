import React from "react"

import VectorIcon from "../images/Vector.png"
import Vector2Icon from "../images/Vector2.png"
import Vector3Icon from "../images/Vector3.png"
import deliveryIcon from "../images/7.png"

export default function Delivery() {
  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery_block">
          <div className="delivery_title">
            <div className="delivery-heading">
              <h2>Фермерские эко-продукты с доставкой на дом</h2>
              <p>
                Мы сократили путь между производителями и покупателями, чтобы на вашем столе были
                только самые свежие продукты
              </p>
            </div>

            <div className="delivery_courier">
              <div className="delivery_icon">
                <img src={VectorIcon} alt="Иконка курьера" />
              </div>
              <div className="delivery-description">
                <h3>Быстрая доставка</h3>
                <p>Среднее время доставки по Минску - 45 минут</p>
              </div>
            </div>

            <div className="delivery_menezhder">
              <div className="delivery_icon">
                <img src={Vector2Icon} alt="Иконка список" />
              </div>
              <div className="delivery-description">
                <h3>Служба онлайн-заказов</h3>
                <p>
                  Оформите заказ в корзине. Наш менеджер свяжется с вами, уточнив информацию по
                  заказу
                </p>
              </div>
            </div>

            <div className="delivery_clock">
              <div className="delivery_icon">
                <img src={Vector3Icon} alt="Иконка часы" />
              </div>
              <div className="delivery-description">
                <h3>Обслуживание 24/7</h3>
                <p>
                  Мы будем рядом 24/7, как онлайн, так и в Контакт-центре. Больше нет необходимости
                  ждать начала рабочего дня. Нам важно, чтобы у каждого клиента была возможность
                  позвонить или написать (чат на сайте, viber-бот, telegram-бот) и решить возникшие
                  проблемы или оформить заказ вне зависимости от времени суток. Приветливые
                  специалисты смогут ответить на все интересующие вопросы по телефонам.
                </p>
              </div>
            </div>
          </div>

          <div className="delivery_background">
            <img src={deliveryIcon} alt="Доставка" />
          </div>
        </div>
      </div>
    </div>
  )
}
