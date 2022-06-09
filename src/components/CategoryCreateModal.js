import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import CategoryStore from "../stores/categoryStore";

export default function CategoryCreateModal(props) {
  const [category, setCat] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setCat({ ...category, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    CategoryStore.createCategory(category);
    props.closeModal();
  };

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Category Name</InputGroup.Text>
            <Form.Control type="text" name="name" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create Category
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
