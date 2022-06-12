import { makeAutoObservable, observable, action } from "mobx";
import instance from "./instance";

class CategoryStore {
  Categories = [];

  constructor() {
    makeAutoObservable(this, {
      Categories: observable,
    });
  }

  //category = "";

  fetchCategories = async () => {
    try {
      const response = await instance.get(`/category`);
      this.Categories = response.data;
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  getCategoryName = (categoryId) => {
    //console.log(categoryId);
    const category = this.Categories?.find(
      (category) => category?._id === categoryId
    );
    //console.log(category);
    return category;
  };

  createCategory = async (category) => {
    category.id = this.category[this.category.length - 1].id + 1;
    this.category.push(category);
    try {
      const response = await instance.post(`/category`, category);
    } catch (error) {
      console.log(error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
