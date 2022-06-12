import React, { useState, useEffect } from "react";
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

  const catList = CategoryStore.Categories?.map((category) => {
    return <Categoryitem category={category} key={category._id} />;
  });
  return (
    <div className="body">
      <br></br>
      <h1>Category</h1>
      <br></br>
      <div className="recipe-container">{catList}</div>
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Category</span>
        <CategoryCreateModal
          isOpen={isOpen}
          closeModal={closeModal}
        ></CategoryCreateModal>
      </button>
    </div>
  );
}
export default observer(Category);
