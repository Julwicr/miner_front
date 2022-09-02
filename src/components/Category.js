import { useState, useRef } from 'react';

export const Category = ({ name, description }) => {
  const [isShown, setIsShown] = useState(false);

  const categoryInfoRef = useRef();

  return (
    <>
      <div className="category">
        <span className="category-name" onClick={() => setIsShown(!isShown)}>
          {name}
        </span>
        <div className="category-info"
             ref={categoryInfoRef}
             style={isShown ? {
                height: categoryInfoRef.current.scrollHeight + 'px'
              } : {
                height: '0px'
              }}>
          <p>
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
