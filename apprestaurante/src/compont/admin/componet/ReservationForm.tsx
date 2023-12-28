import { Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClipboardList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
function ReservationForm() {
  return (
    <Form>
      <Form.Group controlId="fechaReserva">
        <Form.Label>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Fecha de
          Reserva
        </Form.Label>
        <Form.Control type="date" name="fechaReserva" />
      </Form.Group>

      <Form.Group controlId="tipoReserva">
        <Form.Label>
          <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> Tipo de
          Reserva
        </Form.Label>
        <Form.Control
          type="text"
          name="tipoReserva"
          placeholder="Ingrese el tipo de reserva"
          required
        />
      </Form.Group>

      <Form.Group controlId="cantidadPersonas">
        <Form.Label>
          <FontAwesomeIcon icon={faUsers} className="mr-2" /> Cantidad de
          Personas
        </Form.Label>
        <Form.Control
          type="number"
          name="cantidadPersonas"
          placeholder="Ingrese la cantidad de personas"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mt-3">
        Crear Reserva
      </Button>
    </Form>
  );
}

export default ReservationForm;
