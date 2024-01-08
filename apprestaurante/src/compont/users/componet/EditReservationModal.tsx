import { Modal, Button } from 'react-bootstrap';
import FormEdit from './EditForm'; 


export interface ReservationData {
  id: string;
}

interface Options {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  reservationData: ReservationData;
}


const EditReservationModal = ({ show, onHide, onSubmit, reservationData }:Options) => {
  
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        < FormEdit onSubmit={onSubmit} initialData={reservationData.id} />
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