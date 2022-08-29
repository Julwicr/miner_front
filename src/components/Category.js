import { useState } from 'react';

export const Category = ({ name, description }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="category">
        <span className="category-name" onClick={() => setIsShown(!isShown)}>
          {name}
        </span>
      </div>
      {isShown ? (
        <p className="category-description">
          {description}
        </p>
      ) : (null)}
    </>
  )
}
