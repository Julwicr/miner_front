export const ProductCard = ({name, description, price, img_path, article_number}) => {


  return (
    <div className="product-card">
      <img src={img_path} alt="" />
      <h5>{name}</h5>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  )
}
