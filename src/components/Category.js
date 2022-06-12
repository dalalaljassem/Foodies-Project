import React, { useState } from "react";
import Categoryitem from "./Categoryitem";
import CategoryCreateModal from "./CategoryCreateModal";
import CategoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import react from "react";

function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  //view category list
  const catList = CategoryStore.category?.map((category) => {
    return <Categoryitem category={category} key={category._id} />;
  });

  return (
    <div className="body">
      <br></br>
      <h1>Category</h1>
      <br></br>
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Category</span>
        <CategoryCreateModal
          isOpen={isOpen}
          closeModal={closeModal}
        ></CategoryCreateModal>
      </button>
      <div className="recipe-container">{catList}</div>
    </div>
  );
}
export default observer(Category);
