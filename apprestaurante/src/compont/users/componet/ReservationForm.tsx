import { Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClipboardList,
  faUsers,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import UseReserva from "../../../hooks/useReserva";

const ReservationForm = () => {
  const { handleChange, handleReserva, DataReserva } = UseReserva();
  return (
    <Col xs={12} md={10} lg={8}>
      <Form className="border p-4 rounded" onSubmit={handleReserva}>
        <h2 className="text-center mb-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          Reserva de Mesa
        </h2>

        <Form.Group controlId="fechaReserva">
          <Form.Label>
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Fecha de Reserva
          </Form.Label>
          <Form.Control
            type="date"
            name="fechaReserva"
            onChange={handleChange}
            value={DataReserva.fechaReserva}
            required
          />
        </Form.Group>

        <Form.Group controlId="tipoReserva">
          <Form.Label>
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            Tipo de Reserva
          </Form.Label>
          <Form.Control
            as="select"
            name="tipoReserva"
            onChange={handleChange}
            value={DataReserva.tipoReserva}
            required
          >
            <option value="" disabled selected>
              Seleccione el tipo de reserva
            </option>
            <option value="cena">Cena</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="desayuno">Desayuno</option>
            <option value="fechaEspecial">Fecha Especial</option>
          </Form.Control>
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
            onChange={handleChange}
            value={DataReserva.cantidadPersonas}
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
};

export default ReservationForm;
