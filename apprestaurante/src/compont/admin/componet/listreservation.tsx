
import { useState} from 'react';
import ReservationTable from './ReservationTable';
import EditReservationModal from './EditReservationModal';
import { Container } from 'react-bootstrap';
import UseReserva from '../../../hooks/useReserva';

function ListReservation()  {
  const [showModal, setShowModal] = useState(false);
  const [reservaSeleccionadaid, setReservaSeleccionadaid] = useState('');
  const {deleteReserva } = UseReserva();

 

const handleEdit = async (id: string) => {
  try {
    console.log("id", id);
    setReservaSeleccionadaid(id);
    setShowModal(true);
  } catch (error) {
    console.error(error);
    // Manejar el error, por ejemplo, mostrar un mensaje al usuario
  }
};


  const handleDelete = (reservationId:string) => {
    deleteReserva(reservationId)
  };

  const handleModalSubmit = (updatedReservation) => {
    // Implementa la lógica para actualizar la reserva
    // setReservations([...]); // Actualiza el estado de las reservas
    setShowModal(false);
  };

  return (
    <Container className="w-h-100">
    <div>
      <h2>Mis Reservas</h2>
      <ReservationTable  onEdit={handleEdit} onDelete={handleDelete}  />
      <EditReservationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
        reservationData={reservaSeleccionadaid || "valor por defecto"}
      />
    </div>
    </Container>
  );
};

export default ListReservation;