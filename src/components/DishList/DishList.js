import DishItem from '../DishItem/DishItem'
import './DishList.css'

const DishList = ({dishes}) => (
  <div className="dish-list">
    {dishes.map(dish => (
      <DishItem key={dish.dish_id} dish={dish} />
    ))}
  </div>
)

export default DishList
