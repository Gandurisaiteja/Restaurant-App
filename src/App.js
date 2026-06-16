import {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'
import DishList from './components/DishList/DishList'
import './App.css'

const App = () => {
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState('')
  const [restaurantName, setRestaurantName] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
      )
      const data = await response.json()

      setRestaurantName(data[0].restaurant_name)

      const menuList = data[0].table_menu_list
      setCategories(menuList)
      setActive(menuList[0].menu_category)
    }

    getData()
  }, [])

  const selectedCategory = categories.find(
    each => each.menu_category === active
  )

  return (
    <div>
      <Header restaurantName={restaurantName} />
      <CategoryTabs
        categories={categories}
        active={active}
        setActive={setActive}
      />
      {selectedCategory && (
        <DishList dishes={selectedCategory.category_dishes} />
      )}
    </div>
  )
}

export default App