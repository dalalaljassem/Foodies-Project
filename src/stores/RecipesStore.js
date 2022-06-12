// import { makeAutoObservable } from "mobx";
// import instance from "./instance";

<<<<<<< HEAD:src/store/RecipesStore.js
// class RecipesStore {
//   Recipes = [];
=======
class RecipesStore {
  recipes = [];
>>>>>>> b8942007ccd53b4d7f2515eaa8cb76958ea59bcd:src/stores/RecipesStore.js

//   constructor() {
//     makeAutoObservable(this);
//   }

<<<<<<< HEAD:src/store/RecipesStore.js
//   fetchRecipes = async () => {
//     try {
//       const response = await instance.get("/recipe");
//       this.recipes = response.data;
//       console.log(response.data);
//     } catch (error) {
//       console.error("fetching error", error);
//     }
//   };

//   createRecipe = async (recipe) => {
//     try {
//       const response = await instance.post("/recipe", recipe);
//       console.log(response.data);
//       this.recipes.push(response.data);
//     } catch (error) {
//       console.error("creating error", error);
//     }
//   };
// }
// const recipesStore = new RecipesStore();
// recipesStore.fetchRecipes();
// export default recipesStore;
=======
  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipe");
      this.recipes = response.data;
      //console.log(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  // getRecipeName = (recipeId) => {
  //   //console.log(categoryId);
  //   const recipe = this.recipes?.find((recipe) => recipe?._id === recipeId);
  //   //console.log(category);
  //   return recipe;
  // };
  createRecipe = async (recipe) => {
    try {
      const response = await instance.post("/recipe", recipe);
      console.log(response.data);
      this.recipes.push(response.data);
    } catch (error) {
      console.error("creating error", error);
    }
  };
}
const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
>>>>>>> b8942007ccd53b4d7f2515eaa8cb76958ea59bcd:src/stores/RecipesStore.js
