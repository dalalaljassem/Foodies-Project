import IngredModal from "./Modal/ingredientModal";
import CreateRecipeModal from "./Modal/makeRecipeModal";
// import IngredientItem from "./ingredientItem";
import IngredientList from "./IngredientList";
// import recipesStore from "../store/RecipesStore";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import React, { Component } from "react";

function Recipe() {
  const recipesList = recipeStore.recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} recipe={recipe} />
  ));

  return (
    <div className="body">
      <h1>All Recipes </h1>
      <div className="ing-modal">
        <CreateRecipeModal />
        <IngredModal />
        {/* <IngredientList /> */}
      </div>
      <div className="recipe-container"> {recipesList}</div>
      <div className="ing-list">
        {" "}
        <IngredientList />
      </div>
    </div>
  );
}
export default observer(Recipe);
