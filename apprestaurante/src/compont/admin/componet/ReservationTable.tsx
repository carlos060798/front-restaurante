import { Table, Button, Container } from "react-bootstrap";
import React from "react";
import UseReserva from "../../../hooks/useReserva";

const ReservationTable = ({onEdit, onDelete }) => {
  const { Reservas, getReservas,getReserva } = UseReserva();
  console.log("reservas", Reservas);

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
              <td>{reservation.fechaReserva}</td>
              <td>{reservation.tipoReserva}</td>
              <td>{reservation.cantidadPersonas}</td>
              <td>
                <Button variant="info" onClick={() => onEdit(reservation.id)}>
                  Editar
                </Button>{" "}
                <Button variant="danger" onClick={() => onDelete(reservation.id) }>
                  Eliminar
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
