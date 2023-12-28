
import { useState } from 'react';
import ReservationTable from './ReservationTable';
import EditReservationModal from './EditReservationModal';

function ListReservation()  {
  const [reservations, setReservations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleEdit = (reservation) => {
    setSelectedReservation(reservation);
    setShowModal(true);
  };

  const handleDelete = (reservationId) => {
    // Implementa la lógica para eliminar la reserva según el ID
    // setReservations([...]); // Actualiza el estado de las reservas
  };

  const handleModalSubmit = (updatedReservation) => {
    // Implementa la lógica para actualizar la reserva
    // setReservations([...]); // Actualiza el estado de las reservas
    setShowModal(false);
  };

  return (
    <div>
      <h2>Mis Reservas</h2>
      <ReservationTable reservations={reservations} onEdit={handleEdit} onDelete={handleDelete} />
      <EditReservationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
        reservationData={selectedReservation}
      />
    </div>
  );
};

export default ListReservation;