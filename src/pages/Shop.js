import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";

export function Shop(props) {
  const [products, setProducts] = useState([]);


    useEffect(() => {
      axios.get('https://miner-api.herokuapp.com/products')
        .then(res => {
          setProducts(res.data)
        }).catch(err => console.log(err))
    }, [])

    const listProducts = products.map((product) =>
      <Link to={`/product/${product.article_number}`}>
        <ProductCard key={product.article_number}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    img_path={product.img_path}/>
      </Link>
    );

  return (
    <>
      <Header />
      <div className="shop">
        SHOP
        <div className="products-container">
          {listProducts}
        </div>
      </div>
    </>
  );
}
