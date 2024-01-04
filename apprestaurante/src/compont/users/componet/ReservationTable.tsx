import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import UseReserva from "../../../hooks/useReserva";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../general/loading";


const ReservationTable = ({ onEdit, onDelete }) => {
  const { Reservas, getReservas } = UseReserva();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getReservas();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getReservas]);

  return (   
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr >
              <th className="text-primary">Fecha de Reserva</th>
              <th className="text-primary">Tipo de Reserva</th>
              <th className="text-primary">Cantidad de Personas</th>
              <th className="text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(Reservas) &&
              Reservas.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.fechaReserva.split('T')[0]}</td>
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
      )}
    </Container>
  /*  <Container>
      {loading ? ( // Muestra el componente de carga si está cargando
        <LoadingSpinner/>
      ) : (
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
            {Array.isArray(Reservas) &&
              Reservas.map((reservation) => (
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
      )}
    </Container> */
  );
};

export default ReservationTable;
