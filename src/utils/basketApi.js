const localStorageCartItemsKey = "test_cart_data"

export const getCartItems = () => {
  const items = JSON.parse(localStorage.getItem(localStorageCartItemsKey))
  if (items) {
    return {
      success: true,
      items,
    }
  }

  return {
    success: false,
    message: "Корзина пуста",
    items: {},
  }
}

export const setItemToCart = (id, quantity = 1) => {
  const { items } = getCartItems()

  items[id] = quantity

  localStorage.setItem(localStorageCartItemsKey, JSON.stringify(items))

  return {
    success: true,
    items: items,
  }
}

export const removeItemFromCart = (id) => {
  const { items } = getCartItems()

  if (!items[id]) {
    return {
      success: false,
      message: "Товар не был добавлен в корзину",
    }
  }

  const objectClone = { ...items }

  delete objectClone[id]

  localStorage.setItem(localStorageCartItemsKey, JSON.stringify(objectClone))

  return {
    success: true,
    items: objectClone,
  }
}

export const changeQuantityOfCartItem = (id, quantity) => {
  const { items } = getCartItems()

  if (!items[id]) {
    return {
      success: false,
      message: "Товар не был добавлен в корзину",
    }
  }

  items[id] = quantity

  setItemToCart(id, quantity)

  return {
    success: true,
    items,
  }
}

export const clearCart = () => {
  localStorage.removeItem(localStorageCartItemsKey)

  return {
    success: true,
    items: {},
  }
}
