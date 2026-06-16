import {useContext} from 'react'
import {CartContext} from '../CartContext/CartContext'

const DishItem = ({dish}) => {
  const {cart, updateCart} = useContext(CartContext)

  const count = cart[dish.dish_id] || 0

  return (
  <div>
    <h3>{dish.dish_name}</h3>
    <p>{`${dish.dish_currency} ${dish.dish_price}`}</p>
    <p>{dish.dish_description}</p>
    <p>{`${dish.dish_calories} calories`}</p>

   
    <p>{count}</p>

    
    {dish.dish_Availability && (
      <div>
        <button type="button" onClick={() => updateCart(dish, -1)}>
          -
        </button>
        <button type="button" onClick={() => updateCart(dish, 1)}>
          +
        </button>
      </div>
    )}

    
    {!dish.dish_Availability && <p>Not available</p>}

    {dish.addonCat.length > 0 && <p>Customizations available</p>}

    <img src={dish.dish_image} alt="dish" />
  </div>
)
}

export default DishItem
