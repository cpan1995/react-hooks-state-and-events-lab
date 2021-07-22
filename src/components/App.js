import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  let [whichMode, setMode] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = whichMode ? "App dark" : "App light"
  let modeString = whichMode ? "Dark Mode": "Light Mode"

  function changeMode(){
    whichMode = !whichMode
    setMode(whichMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {changeMode}>{modeString}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
