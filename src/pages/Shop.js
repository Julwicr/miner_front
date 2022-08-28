import axios from "axios";
import { useState, useEffect } from 'react';
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

        </div>

        <div className="products-container">
          {listProducts}
        </div>
      </div>
    </>
  );
}
