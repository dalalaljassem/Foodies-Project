import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import ingredientStore from "../../stores/ingredientStore";

function CreateIngredModal() {
  const [show, setShow] = useState(false);
  const [createIngred, setCreateIngred] = useState({
    name: null,
  });

  //OPEN AND CLOSE MODAL WINDOW
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //CHANGE THE VALUE OF INGREDIENT
  const handleChange = (event) =>
    setCreateIngred({
      ...createIngred,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.createIngrd(createIngred);
    handleClose();
  };

  return (
    <div>
      <Button variant="" onClick={handleShow}>
        Add New Ingredient
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Ingredient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient Name</Form.Label>
              <Form.Control
                name="name"
                type="name"
                onChange={handleChange}
                placeholder="Add Ingredient"
                // autoFocus
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => alert(`${createIngred.name} Added`)}
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CreateIngredModal;
