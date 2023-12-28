import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReservationForm from './ReservationForm';

const EditReservationModal = ({ show, onHide, onSubmit, reservationData }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReservationForm onSubmit={onSubmit} initialData={reservationData} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditReservationModal;