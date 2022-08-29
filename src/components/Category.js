import { useState } from 'react';

export const Category = ({ name, description }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="category">
        <button className="category-name" onClick={() => setIsShown(!isShown)}>
          {name}
        </button>
        <input type="checkbox" />
      </div>
      {isShown ? (
        <p className="category-description">
          {description}
        </p>
      ) : (null)}
    </>
  )
}
