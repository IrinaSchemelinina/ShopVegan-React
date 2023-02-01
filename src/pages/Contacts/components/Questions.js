import React, { useState } from "react"
import Title from "../../../components/Title"

const config = [
  {
    title: "Нужна ли регистрация на сайте для оформления заказа?",
    content: "Нет. Достаточно ввести данные получателя доставки, контактный телефон и ожидать звонка оператора для подтверждения заказа."
  },
  {
    title: "Что дает регистрация на сайте?",
    content: "Регистрация на сайте позволяет Вам пользоваться всеми привелегиями постоянных клиентов, а так же отпадает необходимость при каждом заказе вводить данные получателя."
  },
  {
    title: "Осуществляете ли Вы доставку по городам Беларуси?",
    content: "Да, конечно. Оплата наложенным платежом при получении на почте. А так же  онлайн оплата банковской карточкой в системе ArtPay."
  },
  {
    title: "Есть ли возможность самовывоза товара?",
    content: "Да. По адресам наших магазинов."
  },
]

export default function Questions () {
  const [openedIndex, setOpenedIndex] = useState(null)

  const handleOpen = (index) => {
    setOpenedIndex(prevState => {
      if (prevState === index) {
        return null
      } else {
        return index
      }
    })
  }

  return (
    <div className="questions">
        <div className="container">

            <Title>Часто задаваемые вопросы!</Title>

            <div className="questions_accordion-wrapper">
                {config.map(({ title, content }, index) => {
                  return (
                    <div
                      key={title}
                      className={`accordion-item ${openedIndex === index ? "active" : ""}`}
                      onClick={() => handleOpen(index)}
                    >
                        <div className="accordion-item-title">{title}</div>
                        <div className="accordion-item-content">{content}</div>
                    </div>
                  )
                })}
            </div>
        </div>
    </div>
  )
}
