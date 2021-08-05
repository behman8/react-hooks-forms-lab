import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearch, setFilterSearch] = useState("");
  const [typedItem, setTypedItem] = useState("")
  const [newItem, setNewItem] = useState("")

  function handleNewItem(event) {
    setTypedItem(event.target.value)
  };

  function onItemFormSubmit(event) {
    event.preventDefault();
    setNewItem([...itemsToDisplay, typedItem])
  };

  function handleFilterSearch(event) {
    setFilterSearch(event.target.value);
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  .filter((item) => item.name.toLowerCase().includes(filterSearch.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm handleNewItem={handleNewItem} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={handleFilterSearch} search={filterSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
