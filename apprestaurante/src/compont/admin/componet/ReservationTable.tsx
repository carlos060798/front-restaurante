import { Table, Button, Container } from "react-bootstrap";
import React from "react";
import UseReserva from "../../../hooks/useReserva";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatearFecha } from "../../../helpers/fechaform";

const ReservationTable = ({onEdit, onDelete }) => {
  const { Reservas, getReservas } = UseReserva();

  // Llamar a getReservas para obtener las reservas al montar el componente
  React.useEffect(() => {
    getReservas();
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

 

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha de Reserva</th>
            <th>Tipo de Reserva</th>
            <th>Cantidad de Personas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Reservas) && Reservas.map((reservation) => (
            <tr key={reservation.id}>
              <td>{formatearFecha(reservation.fechaReserva)}</td>
              <td>{reservation.tipoReserva}</td>
              <td>{reservation.cantidadPersonas}</td>
              <td>
              <Button variant="info" onClick={() => onEdit(reservation.id)}>
        <FontAwesomeIcon icon={faEdit} className="mr-2" />
        
      </Button>{" "}
      <Button variant="danger" onClick={() => onDelete(reservation.id)}>
        <FontAwesomeIcon icon={faTrash} className="mr-2" />
        
      </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ReservationTable;
