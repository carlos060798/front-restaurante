import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';

const ReservationForm = () => {
  return (
    <Col xs={12} md={10} lg={8} >
    <Form className="border p-4 rounded">
      <h2 className="text-center mb-4">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
        Reserva de Mesa
      </h2>

      <Form.Group controlId="fechaReserva">
        <Form.Label>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          Fecha de Reserva
        </Form.Label>
        <Form.Control type="date" name="fechaReserva" />
      </Form.Group>

      <Form.Group controlId="tipoReserva">
        <Form.Label>
          <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
          Tipo de Reserva
        </Form.Label>
        <Form.Control
          type="text"
          name="tipoReserva"
          placeholder="Ej. Cumpleaños, Aniversario, etc."
          required
        />
      </Form.Group>

      <Form.Group controlId="cantidadPersonas">
        <Form.Label>
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          Cantidad de Personas
        </Form.Label>
        <Form.Control
          type="number"
          name="cantidadPersonas"
          placeholder="Ingrese la cantidad de personas"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mt-3">
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Crear Reserva
      </Button>
    </Form>
    </Col>
  );
}

export default ReservationForm;