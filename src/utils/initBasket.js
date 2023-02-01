import jQuery from "jquery"
import "./smartbasket.min.js"

import cartImg from "../images/shopping-cart.png"

export const initBasket = () => {
  const basket = jQuery(".smart-basket__wrapper")
	if (!basket) return
	basket.smbasket({
		productElement: 'products-grid_item',
		buttonAddToBasket: 'product_btn',
		productPrice: 'product-price_current',
		productSize: 'product__size-element',
		productQuantityWrapper: 'product__quantity',
		smartBasketMinArea: 'cart',
		countryCode: '+375',
		smartBasketCurrency: 'Br',
		smartBasketMinIconPath: cartImg,
		agreement: {
			isRequired: true,
			isChecked: true,
			isLink: 'https://artstranger.ru/privacy.html',
		},
		nameIsRequired: false,
	});
}
