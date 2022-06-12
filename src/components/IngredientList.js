import React, { useState } from "react";
import { observer } from "mobx-react";
import IngredientItem from "./IngredientItem";
import ingredientStore from "../stores/ingredientStore";

function IngredientList() {
  //view ingredient list
  const ingList = ingredientStore.ingredients.map((ingredient) => {
    return <IngredientItem ingredient={ingredient} key={ingredient._id} />;
  });

  return (
    <div className="body">
      <br></br>
      <h3>Ingredients List</h3>
      <br></br>
      <div>{ingList}</div>
    </div>
  );
}
export default observer(IngredientList);
