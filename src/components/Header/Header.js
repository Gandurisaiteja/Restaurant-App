import {useContext} from 'react'
import {CartContext} from '../CartContext/CartContext'

const Header = ({restaurantName}) => {
  const {cart} = useContext(CartContext)

 

  return (
    <div>
      <h1>{restaurantName}</h1>
      <p>My Orders</p>
      <p>{Object.values(cart).reduce((a, b) => a + b, 0)}</p>
    </div>
  )
}

export default Header
