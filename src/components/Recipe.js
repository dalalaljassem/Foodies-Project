import IngredModal from "./Modal/ingredientModal";
import recipesStore from "../stores/RecipesStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import React, { Component } from "react";
function Recipe() {
  const recipesList = recipesStore.recipes?.map((recipe) => {
    return <RecipeItem key={recipe._id} recipe={recipe} />;
  });

  return (
    <div className="body">
      <br></br>
      <br></br>

      <div id="containerCat">
        <h3 id="a">All Recipes</h3>
        <div id="b" className="buttonPlace">
          <IngredModal />
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="recipe-container"> {recipesList}</div>
    </div>
  );
}
export default observer(Recipe);
