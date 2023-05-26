const localStorageCartItemsKey = "test_cart_data"

export const getCartItems = () => {
  const items: number[] = JSON.parse(localStorage.getItem(localStorageCartItemsKey))
  if (items) {
    return {
      success: true,
      items,
    }
  }

  return {
    success: false,
    message: "Корзина пуста",
    items: [],
  }
}

export const setItemToCart = (id) => {
  const { items } = getCartItems()

  if (items.includes(id)) {
    return {
      success: false,
      message: "Товар уже добавлен в корзину",
    }
  }

  const updatedItems = [...items, id]

  localStorage.setItem(localStorageCartItemsKey, JSON.stringify(updatedItems))

  return {
    success: true,
    items: updatedItems,
  }
}

export const removeItemFromCart = (id) => {
  const { items } = getCartItems()

  if (!items.includes(id)) {
    return {
      success: false,
      message: "Товар не был добавлен в корзину",
    }
  }

  const updatedItems = items.filter(i => i !== id)

  localStorage.setItem(localStorageCartItemsKey, JSON.stringify(updatedItems))

  return {
    success: true,
    items: updatedItems,
  }
}

export const clearCart = () => {
  localStorage.removeItem(localStorageCartItemsKey)

  return {
    success: true,
    items: [],
  }
}
