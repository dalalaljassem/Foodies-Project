import { makeAutoObservable } from "mobx";
// import axios from "axios";
import instance from "./instance";

class RecipeStore {
  constructor() {
    makeAutoObservable(this);
  }
  recipes = [];

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipe");
      this.recipes = response.data;
      console.log(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createRecipe = async (recipe) => {
    try {
      const response = await instance.post("user/:userId/recipes", recipe);
      console.log(response);
      this.recipes.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // `user/${userId}/recipes`

  getIngrd = async (ingredient) => {
    try {
      const response = await instance.get("/ingredients", ingredient);
      console.log(response);
      this.ingredients.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();

export default recipeStore;
