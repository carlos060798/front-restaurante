
import { useState} from 'react';
import ReservationTable from './ReservationTable';
import EditReservationModal from './EditReservationModal';
import { Container } from 'react-bootstrap';
import UseReserva from '../../../hooks/useReserva';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function ListReservation()  {
  const [showModal, setShowModal] = useState(false);
  const [reservaSeleccionadaid, setReservaSeleccionadaid] = useState<string | undefined>(undefined);
  const {deleteReserva } = UseReserva();

 

const handleEdit = async (id: string) => {
  try {
    console.log("id", id);
    setReservaSeleccionadaid(id);
    setShowModal(true);
  } catch (error) {
    console.error(error);
  }
};


  const handleDelete = (reservationId:string) => {
    deleteReserva(reservationId)
  };

  const handleModalSubmit = () => {

    setShowModal(false);
  };

  return (
    <Container >
    <div>
    <div className="text-center">
      <h2 className="text-primary fw-bold">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
        Mis Reservas
      </h2>
    </div>
      <ReservationTable  onEdit={handleEdit} onDelete={handleDelete}  />
      <EditReservationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
        reservationData={reservaSeleccionadaid ? { id: reservaSeleccionadaid } : { id: "" }}
      />
    </div>
    </Container>
  );
}

export default ListReservation;