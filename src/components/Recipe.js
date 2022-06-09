import recipesStore from "../store/RecipesStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
function Recipe() {
  const recipesList = recipesStore.recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} recipe={recipe} />
  ));

  return (
    <div>
      <h1>All Recipes </h1>

      <div className="recipe-container"> {recipesList}</div>
    </div>
  );
}
export default observer(Recipe);
