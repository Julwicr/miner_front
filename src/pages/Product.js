import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Header from "../components/Header";
import emerald from '../assets/emerald.png';
import { Link } from "react-router-dom"

export const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productInventory, setProductInventory] = useState('');

  useEffect(() => {
    axios.get(`https://miner-api.herokuapp.com/products/${id}`, { headers: {'Access-Control-Allow-Origin': '*', 'Authorization': localStorage.getItem('token')} })
      .then(res => {
        setProduct(res.data)
        setProductCategory(res.data.product_category)
        setProductInventory(res.data.product_inventory)
      }).catch(err => console.log(err))
  }, [id])

  return (
    <>
      <Header />
      <div className="product">

        <div className="product-back">
          <Link to="/shop" className="back-btn">Back to shop</Link>
        </div>

        <div className="product-category">
          <h2> Category: {productCategory.name} </h2>
          <p> {productCategory.description} </p>
        </div>

        <div className="product-img">
          <img src={product.img_path} alt={`representation of ${product.name}`} />
        </div>

        <div className="product-info">
          <h3>
            {product.name}
          </h3>
          <p> {product.description} </p>
        </div>

        <div className="product-price">
        <span> Price: {product.price}</span>
          <img src={emerald} alt="" />
        </div>

        <div className="product-inventory">
          <span>
            { productInventory.quantity === 0 ? "Out of stock !" : `${productInventory.quantity} in stock !`}
          </span>
          <span className="small-txt">
            Article nb. { product.article_number }
          </span>
        </div>
      </div>
    </>
  )
}
