import IngredModal from "./Modal/ingredientModal";
<<<<<<< HEAD
import CreateRecipeModal from "./Modal/makeRecipeModal";
// import IngredientItem from "./ingredientItem";
import IngredientList from "./IngredientList";
// import recipesStore from "../store/RecipesStore";
import recipeStore from "../stores/recipeStore";
=======
import recipesStore from "../stores/RecipesStore";
>>>>>>> b8942007ccd53b4d7f2515eaa8cb76958ea59bcd
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import React, { Component } from "react";

function Recipe() {
<<<<<<< HEAD
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
=======
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

>>>>>>> b8942007ccd53b4d7f2515eaa8cb76958ea59bcd
      <div className="recipe-container"> {recipesList}</div>
      <div className="ing-list">
        {" "}
        <IngredientList />
      </div>
    </div>
  );
}
export default observer(Recipe);
