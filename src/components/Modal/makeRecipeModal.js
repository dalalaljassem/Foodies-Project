import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import recipeStore from "../../stores/recipeStore";
import IngredientList from "../IngredientList";

function CreateRecipeModal() {
  const [show, setShow] = useState(false);
  const [createRecipe, setCreateRecipe] = useState({
    name: null,
  });

  //OPEN AND CLOSE MODAL WINDOW
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //CHANGE THE VALUE OF INGREDIENT
  const handleChange = (event) =>
    setCreateRecipe({
      ...createRecipe,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipe(createRecipe);
    handleClose();
  };

  return (
    <div>
      <Button variant="" onClick={handleShow}>
        Add New Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                name="name"
                type="name"
                onChange={handleChange}
                placeholder="Add Recipe"
              />
              <Form.Label>Recipe Image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                onChange={handleChange}
                placeholder="Add Image"
              />
              <Form.Label>Recipe Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                onChange={handleChange}
                placeholder="Add Description"
              />
              <Form.Group>
                <IngredientList />
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Form.Group>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => alert(`${createRecipe.name} Added`)}
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CreateRecipeModal;
