import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h2>Page not found.</h2>
      <Link to="/" className="enter-btn">Home</Link>
    </div>
  )
}
