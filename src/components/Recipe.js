<<<<<<< HEAD
import IngredModal from "./Modal/ingredientModal";

function Recipe() {
  return (
    <div>
      <IngredModal />
    </div>
  );
}
export default Recipe;
=======
import recipesStore from "../store/RecipesStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import React, { Component } from "react";
function Recipe() {
  const recipesList = recipesStore.recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} recipe={recipe} />
  ));

  return (
    <div className="body">
      <h1>All Recipes </h1>

      <div className="recipe-container"> {recipesList}</div>
    </div>
  );
}
export default observer(Recipe);
>>>>>>> b09be87fa467b3c488cf3039a8a14afdc6a1f54f
