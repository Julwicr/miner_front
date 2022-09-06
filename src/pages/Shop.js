import axios from "axios";
import { useState, useEffect, useMemo } from 'react';
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Categories } from "../components/Categories";
import { FilterCategory } from "../components/FilterCategory";

export function Shop() {
  const [products, setProducts] = useState([]);
  const [maxPrice,setMaxPrice] = useState('');
  const [minPrice,setMinPrice] = useState('');

  const [selectedCategory, setSelectedCategory] = useState([]);

  const memoizedHeader = useMemo(() => {
    const head = { headers: {'Access-Control-Allow-Origin': '*', 'Authorization': localStorage.getItem('token')} }
    return head
  }, [])


    useEffect(() => {
      axios.get('http://localhost:3000/products', memoizedHeader)
        .then(res => {
          setProducts(res.data)
        }).catch(err => console.log(err))
    }, [memoizedHeader]);


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

      const toFetch = `http://localhost:3000/products?${maxPrice ? 'max=' + maxPrice : ''}&${minPrice ? 'min=' + minPrice : ''}`
      try {
        const response = await axios.get(toFetch, memoizedHeader);
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


    const noProduct = <div className="noProduct">Sorry, no product matches your search.</div>;

  return (
    <>
      <Header />
      <div className="shop">
        <div className="side-bar">
          <Categories />

          <h2>Filters:</h2>

          <FilterCategory handleFilters={(filters) => setSelectedCategory(filters)}/>

          <form className="side-bar-price" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="minprice">Min. price</label>
              <input type="number" id="minprice" name="minprice"
                    min="0" max="100"
                    onChange={(e) => setMinPrice(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="maxprice">Max. price</label>
              <input type="number" id="maxprice" name="maxprice"
                    min="0" max="100"
                    onChange={(e) => setMaxPrice(e.target.value)}/>
            </div>
            <button>Filter</button>
          </form>

        </div>

        <div className="products-container">
          {listProducts.length === 0 ? noProduct : listProducts}
        </div>
      </div>
    </>
  );
}
