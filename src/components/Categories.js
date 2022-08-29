import axios from "axios";
import { useState, useEffect } from 'react';
import { Category } from "../components/Category";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios.get('https://miner-api.herokuapp.com/categories')
        .then(res => {
          setCategories(res.data)
        }).catch(err => console.log(err))
    }, []);

    const listCategories = categories.map((category) =>
        <Category key={category.name}
                  name={category.name}
                  description={category.description} />
    );

  return (
    <div className="categories">
      <h2>Products Categories:</h2>
      {listCategories}
    </div>
  )
}
