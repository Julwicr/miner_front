import { Link } from "react-router-dom";
import emerald from '../assets/emerald.png';

export const ProductCard = ({name, description, price, img_path, article_number}) => {


  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={img_path} alt="" />
      </div>
      <div className="product-card-info">
        <Link to={`/product/${article_number}`}>
          <h5>{name}</h5>
        </Link>
        <p>{description}</p>
      </div>
      <div className="product-card-price">
        <span>{price}</span>
        <img src={emerald} alt="" />
      </div>
    </div>
  )
}
