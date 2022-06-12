import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

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
