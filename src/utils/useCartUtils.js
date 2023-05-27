import { useCallback, useState } from "react"
import {
  getCartItems,
  removeItemFromCart,
  setItemToCart,
  clearCart,
  changeQuantityOfCartItem,
} from "./basketApi"

export default function useCartUtils () {
  const [productIdsInCart, setProductIdsInCart] = useState(getCartItems().items)
  const [showCartInfoPopup, setShowCartInfoPopup] = useState(false)
  const [showCartPopup, setShowCartPopup] = useState(false)
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false)

  const addToCart = useCallback(
    (id) => {
      const res = setItemToCart(id)
      if (res.success) {
        setProductIdsInCart(res.items)
        setIsAlreadyAdded(false)
        setShowCartInfoPopup(true)
      } else {
        setIsAlreadyAdded(true)
        setShowCartInfoPopup(true)
      }
    },
    [],
  )

  const removeFromCart = useCallback(
    (id) => {
      const res = removeItemFromCart(id)
      if (res.success) {
        setProductIdsInCart(res.items)
      }
    },
    [],
  )

  const clearAllCart = useCallback(
    (id) => {
      const res = clearCart()
      if (res.success) {
        setProductIdsInCart(res.items)
      }
    },
    [],
  )

  const goToCart = useCallback(
    () => {
      setShowCartPopup(true)
    },
    [],
  )

  const changeQuantityInCartItem = (id, direction, value) => {
    let newQuantity

    if (direction === "-") {
      newQuantity = productIdsInCart[id] - 1

      if (newQuantity === 0) {
        return removeFromCart(id)
      }
    } else if (direction === "+") {
      if (!productIdsInCart[id]) {
        return addToCart(id)
      }

      newQuantity = productIdsInCart[id] + 1
    } else {
      newQuantity = value || 0
    }

    const res = changeQuantityOfCartItem(id, newQuantity)

    if (res.success) {
      setProductIdsInCart(res.items)
    }
  }

  return {
    productIdsInCart,
    addToCart,
    removeFromCart,
    setShowCartInfoPopup,
    showCartInfoPopup,
    isAlreadyAdded,
    showCartPopup,
    setShowCartPopup,
    goToCart,
    clearAllCart,
    changeQuantityInCartItem,
  }
}
