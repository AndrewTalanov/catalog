

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditProduct = ({ product }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product ID: {product.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Здесь может быть дополнительный контент</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProduct;