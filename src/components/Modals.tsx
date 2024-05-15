import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dice from "./images/icon-dice.svg"
type ModalProp={
    show:boolean
    handleClose:()=>void
    
}
function Modals({show,handleClose}:ModalProp) {

  return (
    <>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>How To Use</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          click &nbsp;
          <img className="dice1" width={"-50%"} src={dice} alt="divider"/>&nbsp;
          to generate random images
          </div>
         
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;