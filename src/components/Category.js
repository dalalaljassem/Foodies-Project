import React, { useState, useEffect } from "react";
import Categoryitem from "./Categoryitem";
import CategoryCreateModal from "./CategoryCreateModal";
import CategoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";

function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const catList = CategoryStore.Categories?.map((category) => {
    return <Categoryitem category={category} key={category._id} />;
  });
  return (
    <div className="body">
      <br></br>
      <br></br>

      <div id="containerCat">
        <h3 id="a">Categories</h3>
        <div id="b" className="buttonPlace">
          <button className="btn">
            <i
              class="fa fa-plus-circle 2xl"
              aria-hidden="true"
              onClick={openModal}
            ></i>
            <CategoryCreateModal
              isOpen={isOpen}
              closeModal={closeModal}
            ></CategoryCreateModal>
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
<<<<<<< HEAD
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Category</span>
        <CategoryCreateModal
          isOpen={isOpen}
          closeModal={closeModal}
        ></CategoryCreateModal>
      </button>
=======
>>>>>>> b8942007ccd53b4d7f2515eaa8cb76958ea59bcd
      <div className="recipe-container">{catList}</div>
    </div>
  );
}
export default observer(Category);
