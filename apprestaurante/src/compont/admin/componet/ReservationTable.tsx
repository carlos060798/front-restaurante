import { Table, Button } from "react-bootstrap";

const ReservationTable = ({ reservations, onEdit, onDelete }) => {
  const Reservations = [
    {
      id: 1,
      fechaReserva: "2021-10-10",
      tipoReserva: "Mesa",
      cantidadPersonas: 2,
    },
    {
      id: 2,
      fechaReserva: "2021-10-10",
      tipoReserva: "Mesa",
      cantidadPersonas: 2,
    },
  ];
  return (
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
        {Reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.fechaReserva}</td>
            <td>{reservation.tipoReserva}</td>
            <td>{reservation.cantidadPersonas}</td>
            <td>
              <Button variant="info" onClick={() => onEdit(reservation)}>
                Editar
              </Button>{" "}
              <Button variant="danger" onClick={() => onDelete(reservation.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReservationTable;
