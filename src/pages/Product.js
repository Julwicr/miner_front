import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

export const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState('');

  useEffect(() => {
    axios.get(`https://miner-api.herokuapp.com/products/${id}`)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      }).catch(err => console.log(err))
  }, [id])

  return (
    <div>Product
      {product.name}
    </div>
  )
}
