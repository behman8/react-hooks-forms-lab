import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [typedItem, setTypedItem] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

  function handleNewCategory(event) {
    setNewCategory(event.target.value)
  };

  function handleTypedItem(event) {
    setTypedItem(event.target.value)
  };

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: typedItem,
      category: newCategory,
    };
    props.onItemFormSubmit(newItem)
  };

  const newItem = {
    id: uuid(),
    name: typedItem,
    category: newCategory,
  };
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleTypedItem} name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
