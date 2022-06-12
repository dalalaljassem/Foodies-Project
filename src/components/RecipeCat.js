import React, { useState } from "react";
import categoryStore from "../stores/categoryStore";
import recipesStore from "../stores/RecipesStore";
import RecipeItem from "./RecipeItem";

import "../App.css";
import { observer } from "mobx-react";

import { useParams, Navigate } from "react-router-dom";

function RecipeCat() {
  const { categoryId } = useParams();
  const [recipeCat, setRecipeCat] = useState();
  //console.log(categoryId);
  let category = categoryStore.getCategoryName(categoryId);

  let recCat = category?.recipes?.map((recipe) => {
    console.log(recipe);

    return <RecipeItem key={recipe._id} recipe={recipe} category={category} />;
    //console.log(recipe);
    //return recipe;
  });
  //console.log(recCat);
  //console.log(recCat.image);
  //   let List = recCat.map((recipe) => {
  //     return <RecipeItem key={recipe._id} recipe={recipe} />;
  //   });
  //   console.log(category.name);
  //   if (category.name == recCat)
  if (category == undefined) {
    return <Navigate to="/" />;
  }

  //   let recipecategory = recipesStore.recipes?.map((recipe) => {
  //     category.recipes?.forEach((recId) => {
  //       if (recipe._id == recId) {
  //         return <RecipeItem key={recipe._id} recipe={recipe} />;
  //         //setRecipeCat([...recipeCat, reci]);
  //         // recipecat.push(reci.image);
  //       }
  //     });
  //   });
  //   console.log(recipecategory);
  //recipeCategory;
  return (
    <div className="body">
      <h1>{category.name} Category</h1>
      {/* <div className="one-recipe">
        <img className="one-recipe-img" src={recCat.image} />
        <div className="recipe-name">{recCat.name}</div>
        <div className="recipe-desc">{recCat.category.name}</div>
      </div> */}
      <div className="recipe-container"> {recCat}</div>
    </div>
  );
}
export default observer(RecipeCat);
