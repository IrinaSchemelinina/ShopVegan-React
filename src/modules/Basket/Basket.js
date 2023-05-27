import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Popup from "../../components/Popup";
import { productData } from "../../config/productData"

export default function BasketModal ({ itemIds, isShowPopup, onClose, onDelete, onClearCart, changeQuantityInCartItem }) {
  const [submitted, setSubmitted] = useState(false)
  const products = productData.filter(item => itemIds[item.id])
  const fullPrice = products.reduce((acc, item) => {
    return +item.price * itemIds[item.id] + acc
  }, 0)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    onClearCart()
    setTimeout(onClose, 3000);
  }

  useEffect(() => {
    return () => {
      clearTimeout(onClose)
    }
  })

  return (
    <Popup isShow={isShowPopup} noPadding onClose={onClose}>
      <form className="smart-basket__form" method="POST" id="smart-basket__form" encType="multipart/form-data" onSubmit={onSubmit}>
        <div className="smart-basket__product-item">
          <div className="smart-basket__product-name">Товар</div>
          <div className="smart-basket__product-id">ID</div>
          <div className="smart-basket__product-price">Цена / Br</div>
          <div className="smart-basket__product-quantity">Количество</div>
          <div className="smart-basket__product-delete">Удалить</div>
        </div>
        {products.map(item => {
          return (
            <div key={item.id} className="smart-basket__product-item">
              <div className="smart-basket__product-name">
                <img src={item.image} width="60" alt={item.title} />
                <span>{item.title}</span>
                <input className="smart-basket__input" type="hidden" name="20[productImg]" value={item.image} />
                <input className="smart-basket__input" type="hidden" name="20[productName]" value={item.title} />
              </div>
              <div className="smart-basket__product-id">
                {item.id}
                <input className="smart-basket__input" type="hidden" value={item.id} name="20[productId]" />
              </div>
              <div className="smart-basket__product-price">
                {(+item.price * itemIds[item.id]).toFixed(2)}
                <input className="smart-basket__input" type="hidden" name="20[productPrice]" value={(+item.price * itemIds[item.id]).toFixed(2)} />
              </div>
              <div className="smart-basket__product-quantity">
                <button className="smart-basket__remove-item" onClick={() => changeQuantityInCartItem(item.id, "-")}>-</button>
                <input className="smart-basket__product-quantity-state" type="number" min="1" step="1" pattern="^[0-9]" value={itemIds[item.id]} onChange={(e) => changeQuantityInCartItem(item.id, "", e.target.value)} />
                <button className="smart-basket__add-item" onClick={() => changeQuantityInCartItem(item.id, "+")}>+</button>
              </div>
              <button className="smart-basket__product-delete" onClick={() => onDelete(item.id)}>
                <span className="smart-basket__delete-icon">×</span>
              </button>
            </div>
          )
        })}
        <div className="smart-basket__result-common">
          {!products.length && !submitted && <div className="smart-basket__empty-title">Корзина пуста. Вы не добавили ни одного товара</div>}
          {submitted && <div className="smart-basket__success-title">Заказ принят. Ожидайте звонка</div>}
          {!submitted && (
            <>
              <div className="smart-basket__quantity-common">
                <span>Всего товаров: </span> {products.length}
              </div>
              <div className="smart-basket__price-common">
                <span>Общая стоимость: </span>
                <input name="finalPrice" className="smart-basket__total-cost" type="text" value={`${fullPrice.toFixed(2)} Br`} readOnly />
              </div>
            </>
          )}
        </div>
        <div className="smart-basket__user-form">
          <div className="smart-basket__user-info">
            <div className="smart-basket__input-wrapper">
              <input className="smart-basket__user-input" type="text" placeholder="Введите имя" name="userName" required="required" />
            </div>
            <div className="smart-basket__input-wrapper">
              <input className="smart-basket__user-input" type="tel" placeholder="Введите телефон" name="userTel" required="required" maxLength="18" />
            </div>
            <div className="smart-basket__input-wrapper">
              <input className="smart-basket__user-input" type="email" placeholder="Введите e-mail" name="userEmail" />
            </div>
            <div className="smart-basket__agreement-wrapper">
              <input type="checkbox" name="agreement" className="smart-basket__input-agreement" id="smart-basket__input-agreement" defaultChecked="checked" value="Я принимаю условия пользовательского соглашения" />
              <label className="smart-basket__label-agreement" htmlFor="smart-basket__input-agreement"></label>
              <Link className="smart-basket__link-agreement" to="/contacts" onClick={onClose}>
                Я принимаю условия пользовательского соглашения
              </Link>
            </div>
          </div>
          <div className="smart-basket__footer">
            <button className="smart-basket__close-form" onClick={onClose}>
              Продолжить покупки
            </button>
            <button className="smart-basket__send-form" form="smart-basket__form" type="submit">
              Сделать заказ
            </button>
          </div>
        </div>
      </form>
    </Popup>
  )
}
