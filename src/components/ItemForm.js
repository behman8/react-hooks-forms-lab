import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" onChange={props.handleNewItem} name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit" onChange={props.onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
