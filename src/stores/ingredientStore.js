import { makeAutoObservable } from "mobx";
// import axios from "axios";
import instance from "./instance";

class IngredientStore {
  constructor() {
    makeAutoObservable(this);
  }

  ingredients = [];

  fetchIngredients = async () => {
    try {
      const response = await instance.get(`/ingredients`);
      this.ingredients = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  createIngrd = async (ingredient) => {
    try {
      const response = await instance.post("/ingredients", ingredient);
      console.log(response);
      this.ingredients.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();

export default ingredientStore;
