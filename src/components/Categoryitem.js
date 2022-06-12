import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryCreateModal from "./CategoryCreateModal";

export default function Categoryitem({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Link className="item" to={`/category/${category._id}`}>
        <div className="one-recipe">
          <img className="one-recipe-img" src={category.image}></img>
          <div className="recipe-name">{category.name}</div>
        </div>
      </Link>
      <CategoryCreateModal
        isOpen={isOpen}
        closeModal={closeModal}
        category={category}
      />
    </>
  );
}
