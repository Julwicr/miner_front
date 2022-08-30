import axios from "axios";
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Categories } from "../components/Categories";
import { FilterCategory } from "../components/FilterCategory";

export function Shop() {
  const [products, setProducts] = useState([]);
  const [maxPrice,setMaxPrice] = useState('');

  const [selectedCategory, setSelectedCategory] = useState([]);


    useEffect(() => {
      axios.get('https://miner-api.herokuapp.com/products')
        .then(res => {
          setProducts(res.data)
        }).catch(err => console.log(err))
    }, []);


    // filter by category

    const filterCat = (products) => {
      if (selectedCategory.length !== 0) {
        const productsToFilter = [...products];

        const filteredProducts = productsToFilter.filter((product) => selectedCategory.indexOf(product.product_category.name) !== -1);
        setProducts(filteredProducts);
      } else {
        setProducts(products);
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.get(`https://miner-api.herokuapp.com/price?max=${maxPrice ? maxPrice : '500'}`);
        filterCat(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    const listProducts = products.map((product) =>
        <ProductCard key={product.article_number}
                    article_number={product.article_number}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    img_path={product.img_path}/>
    );

  return (
    <>
      <Header />
      <div className="shop">
        <div className="side-bar">
          <Categories />
          <FilterCategory handleFilters={(filters) => setSelectedCategory(filters)}/>

          <div className="side-bar-price">
            <form onSubmit={handleSubmit}>
              <label htmlFor="price">Max-price</label>
              <input type="number" id="price" name="price"
                     min="0" max="100"
                     onChange={(e) => setMaxPrice(e.target.value)}/>
              <button>Filter</button>
            </form>
          </div>

        </div>

        <div className="products-container">
          {listProducts}
        </div>
      </div>
    </>
  );
}
