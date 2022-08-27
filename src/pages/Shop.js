import axios from "axios";
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";

export function Shop(props) {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const toFetch = 'https://miner-api.herokuapp.com/products';
  //     const response = await axios.get(toFetch);

  //     setProducts(response.data);
  //     console.log(response.data, products);
  //   };


  //   fetchProducts();
  // }, []);

    useEffect(() => {
      axios.get('https://miner-api.herokuapp.com/products')
        .then(res => {
          console.log('#######', res.data)
          setProducts(res.data)
        }).catch(err => console.log(err))
    }, [])

    const listProducts = products.map((product) =>
      <ProductCard key={product.article_number}
                   name={product.name}
                   description={product.description}
                   price={product.price}
                   img_path={product.img_path}/>
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
