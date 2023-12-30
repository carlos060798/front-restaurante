
/*
import { useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import UseReserva from '../../../hooks/useReserva';
import { formatearFecha } from '../../../helpers/fechaform';

const FormEdit = ({ initialData, onSubmit }: Props) => {
  const { handleChange, DataReserva, setDataReserva,getReserva } = UseReserva();

  // Utiliza useEffect para establecer los valores iniciales cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reserva = await getReserva(initialData); // Cambié a getReserva en lugar de getReservas, ya que parecía un error tipográfico
        setDataReserva(reserva);
      } catch (error) {
        console.error("Error al obtener la reserva:", error);
        // Manejar el error según sea necesario
      }
    };
  
    fetchData(); // Llamamos a la función asíncrona aquí
  
  }, [initialData]);

  console.log("initialData", DataReserva);
  return (
    <Col>
      <Form className="border p-4 rounded" onSubmit={onSubmit}>
        <h2 className="text-center mb-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          Edita tu Reserva
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
            value={formatearFecha(DataReserva.fechaReserva)}
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

export default FormEdit;
*/


import { useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import UseReserva from '../../../hooks/useReserva';
import { formatearFecha } from '../../../helpers/fechaform';

const FormEdit = ({ initialData, onSubmit }: Props) => {
  const { handleChange, DataReserva, setDataReserva, getReserva } = UseReserva();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reserva = await getReserva(initialData);
        setDataReserva(reserva);
      } catch (error) {
        console.error("Error al obtener la reserva:", error);
        // Manejar el error según sea necesario
      }
    };
  
    fetchData();
  
  }, [initialData]);

  return (
    <Col>
      <Form className="border p-4 rounded" onSubmit={onSubmit}>
        <h2 className="text-center mb-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          Edita tu Reserva
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
            value={formatearFecha(DataReserva.fechaReserva)}

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

export default FormEdit;

