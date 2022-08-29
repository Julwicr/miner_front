import { useState } from "react"

export const FilterCategory = () => {
  const [checked, setChecked] = useState([]);
  const checkList = ["Tool", "Gear", "Echantment", "Block", "Food"];

  const handleChecked = () => {

  }

  console.log(checked)

  return (
    <div className="side-bar-categoriesFilter">
      {checkList.map((category, index) => (
        <div className="side-bar-categoriesFilter-item">
          <label htmlFor={category}>{category}</label>
          <input type="checkbox" id={category} onClick={() => handleChecked}/>
        </div>
      ))}
    </div>
  )
}
