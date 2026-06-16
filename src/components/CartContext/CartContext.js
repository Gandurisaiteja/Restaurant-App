import {createContext, useState} from 'react'

export const CartContext = createContext({
  cart: {},
  updateCart: () => {},
})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({})

  const updateCart = (dish, change) => {
    setCart(prev => {
      const currentCount = prev[dish.dish_id] || 0

      const newCount = currentCount + change

      if (newCount < 0) return prev

      return {
        ...prev,
        [dish.dish_id]: newCount,
      }
    })
  }

  return (
    <CartContext.Provider value={{cart, updateCart}}>
      {children}
    </CartContext.Provider>
  )
}
