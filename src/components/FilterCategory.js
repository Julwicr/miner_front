import { useState } from "react"

export const FilterCategory = ({ handleFilters }) => {
  const catList = ["Tool", "Gear", "Echantment", "Block", "Food"];
  const [checked, setChecked] = useState([]);


  const handleChecked = (index) => {
    const newChecked = [...checked];
    const checkedCat = catList[index];

    if (checked.indexOf(checkedCat) === -1) {
      newChecked.push(checkedCat);
    } else {
      newChecked.splice(checked.indexOf(checkedCat), 1);
    }

    // console.log(index, newChecked);
    setChecked(newChecked);
    handleFilters(newChecked);
  }

  return (
    <div className="side-bar-categoriesFilter">
      {catList.map((category, index) => (
        <div className="side-bar-categoriesFilter-item" key={index}>
          <label htmlFor={category}>{category}</label>
          <input type="checkbox" id={category} onChange={() => handleChecked(index)}/>
        </div>
      ))}
    </div>
  )
}
