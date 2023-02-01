import React from "react"
import Title from "../../../components/Title"

import money from "../../../images/delivery/money.png"
import debit from "../../../images/delivery/debit-card.png"
import card from "../../../images/delivery/card.png"
import wallet from "../../../images/delivery/wallet.png"
import visa from "../../../images/delivery/visa.png"

export default function PaymentSection() {
  return (
    <div className="payment">
      <div className="container">
        <Title>Оплата</Title>

        <h3 className="payment_info">
          Оплатить товары в нашем магазине можно следующими способами:
        </h3>

        <div className="payment_types">
          <div className="block">
            <div className="payment_block">
              <div className="payment_image">
                <img src={money} alt="наличные-картинка" />
              </div>
              <p>Наличными курьеру</p>
            </div>
            <div className="payment_block">
              <div className="payment_image">
                <img src={debit} alt="наличные-картинка" />
              </div>
              <p>Банковской картой курьеру</p>
            </div>
          </div>

          <div className="block">
            <div className="payment_block">
              <div className="payment_image">
                <img src={card} alt="наличные-картинка" />
              </div>
              <p>
                Банковской картой через Интернет с помощью платежной системы bePaid, картой Халва
              </p>
            </div>
            <div className="payment_block">
              <div className="payment_image">
                <img src={wallet} alt="наличные-картинка" />
              </div>
              <p>Оплата наложенным платежом при получении на почте</p>
            </div>
          </div>
        </div>

        <div className="payment_manual">
          <h4>
            Для того, чтобы произвести оплату банковской картой через Интернет с помощью платежной
            системы bePaid Вам необходимо:
          </h4>
          <ol>
            <li>Сложить необходимый товар в корзину.</li>
            <li>Проверить весь товар в корзине, его стоимость и количество.</li>
            <li>
              Заполнить все необходимые поля для оформления заказа. (Внимательно проверяйте Ваш
              контактный номер телефона!).
            </li>
            <li>Выбрать способ доставки и оплаты.</li>
            <li>Нажать кнопку "Подтверждение заказа".</li>
            <li>
              Далее Вы перейдете на специальную защищенную платежную страницу процессинговой системы
              bePaid. Для оплаты Вам необходимо ввести свои карточные данные и подтвердить платеж.
              (Если Ваша карта поддерживает технологию 3-D Secure, Вам будет предложено пройти
              стандартную одноминутную процедуру проверки владельца карты на сайте Вашего банка).
            </li>
            <li>
              После оплаты менеджер свяжется с Вами по телефону для уточнения деталей по доставке.
            </li>
          </ol>
          <p>
            Обращаем внимание, что после проведения платежа на Ваш электронный адрес придет
            подтверждение оплаты. Просим Вас сохранять данные оплат.
          </p>
          <p className="attention">
            Если товар был оплачен картой через сайт, то возврат осуществляется на карту, с которой
            была произведена оплата, а срок поступления денежных средств на карту - от 3 до 30 дней
            с момента осуществления возврата Продавцом.
          </p>
          <p>
            Мы принимаем платежи по следующим банковским картам: Visa, Visa Electron, MasterCard,
            Maestro, Халва.
          </p>
          <img src={visa} alt="платежные карты картинка" />
          <p>
            Платежи по банковским картам осуществляются через систему электронных платежей bePaid.
            Платежная страница системы отвечает всем требованиям безопасности передачи данных (PCI
            DSS Level 1). Все конфиденциальные данные хранятся в зашифрованном виде и максимально
            устойчивы к взлому.
          </p>
        </div>
      </div>
    </div>
  )
}
