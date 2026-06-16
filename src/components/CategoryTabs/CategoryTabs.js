import './CategoryTabs.css'

const CategoryTabs = ({categories, active, setActive}) => (
  <div>
    {categories.map(cat => (
      <button
        key={cat.menu_category_id}
        onClick={() => setActive(cat.menu_category)}
      >
        {cat.menu_category}
      </button>
    ))}
  </div>
)

export default CategoryTabs