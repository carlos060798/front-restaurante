import { Modal, Button } from 'react-bootstrap';
import FormEdit from './EditForm'; 
interface Options {
  show: boolean;
  onHide: () => void;
  onSubmit: (data: ReservationData) => void;
  reservationData: ReservationData; // Tipo explícito para reservationData
}


const EditReservationModal = ({ show, onHide, onSubmit, reservationData }:Options) => {
  
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        < FormEdit onSubmit={onSubmit} initialData={reservationData} />
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