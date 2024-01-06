
import { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../general/loading";
import UseAdmin from "../../../hooks/useAdmin";
import UseReserva from "../../../hooks/useReserva";

interface Reservation {
  id: string;
  fechaReserva: string;
  tipoReserva: string;
  cantidadPersonas: number;
  estado: string;
}

const ListViutdata = () => {

 const { reservations,getdataresevations,aprobatereserva} = UseAdmin();
 const {  deleteReserva } = UseReserva();
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getdataresevations();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getdataresevations]);

  return (   
    <Container>
              <h3 className="text-center fw-bold text-primary">Lista de Reservas del sistema</h3>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table striped bordered hover>
        
          <thead>
            <tr >
              <th className="text-primary">Fecha de Reserva</th>
              <th className="text-primary">Tipo de Reserva</th>
              <th className="text-primary">Cantidad de Personas</th>
              <th className="text-primary">Estado</th>
              <th className="text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray( reservations) &&
               reservations.map((reservation:Reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.fechaReserva.split('T')[0]}</td>
                  <td>{reservation.tipoReserva}</td>
                  <td>{reservation.cantidadPersonas}</td>
                  <td>{reservation.estado}</td>
                  <td>
                    <Button variant="info" onClick={() => aprobatereserva( reservation.id)}>
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                    </Button>{" "}
                    <Button variant="danger" onClick={() =>deleteReserva(reservation.id)}>
                      <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ListViutdata;