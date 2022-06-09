import { makeAutoObservable } from "mobx";
// import axios from "axios";
import instance from "./instance";

class IngredientStore {
  constructor() {
    makeAutoObservable(this);
  }

  ingredients = [];

  //   fetchMember = async () => {
  //     try {
  //       const response = await axios.get("https://library-borrow-system.herokuapp.com/api/members");
  //       this.members = response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  createIngrd = async (ingredient) => {
    try {
      const response = await instance.post("/ingredients", ingredient);
      console.log(response);
      this.ingredients.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   borrowBook = async (bookId, memberId) => {
  //     try {
  //       await axios.put(`https://library-borrow-system.herokuapp.com/api/books/${bookId}/borrow/${memberId}`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
}

const ingredientStore = new IngredientStore();
// membersStore.fetchMember();

export default ingredientStore;
