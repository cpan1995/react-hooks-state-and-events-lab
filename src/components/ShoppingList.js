import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setCategory] = useState('All')

  function changeCat(e){
    selectedCategory = e.target.value
    setCategory(selectedCategory);
  }
  items = items.filter(item => {
    if(selectedCategory === 'All'){
      return true
    }
    else{
      return (selectedCategory === item.category)
    }
  })

  return (
    <div className="ShoppingList" >
      <div className="Filter">
        <select name="filter" onChange={changeCat}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
