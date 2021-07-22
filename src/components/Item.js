import React, { useState } from "react";
function Item({ name, category }) {
  let [inCart, setItemClass] = useState(false);

  let isItInCart = inCart ? 'in-cart' : '';
  let color = inCart ? 'purple' : 'yellow'
  let textChange = inCart ? 'Remove From Cart': 'Add to Cart'

  function handleClick(){
    isItInCart = !isItInCart
    setItemClass(isItInCart)
  }
  return (
    <li className={isItInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick} className="add" style={{backgroundColor: color}}>{textChange}</button>
    </li>
  );
}

export default Item;
