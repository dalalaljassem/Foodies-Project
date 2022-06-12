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
      <h1>All Recipes </h1>
      <div>
        <IngredModal />
      </div>
      <div className="recipe-container"> {recipesList}</div>
    </div>
  );
}
export default observer(Recipe);
