import axios from "axios";
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Categories } from "../components/Categories";

export function Shop(props) {
  const [products, setProducts] = useState([]);
  const [maxPrice,setMaxPrice] = useState('');


    useEffect(() => {
      axios.get('https://miner-api.herokuapp.com/products')
        .then(res => {
          setProducts(res.data)
        }).catch(err => console.log(err))
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.get(`https://miner-api.herokuapp.com/price?max=${maxPrice}`);
        setProducts(response.data);
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
