
import { Container, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import ReservationForm from './ReservationForm';

const ReservaView = () => {
  return (
    <Container className="d-flex my-5">
      
        <Col md={6} xs={12} className="align-self-center">
          <div className="text-center">
            <h2 className="mb-4">¡Reserva tu mesa!</h2>
            <p>
              ¿Listo para disfrutar de una experiencia única? ¡Haz tu reserva ahora!
            </p>
            <div className='bg-primary  my-5 rounded-2 text-light'>
              <FontAwesomeIcon icon={faChevronCircleRight} className="mr-2" />
              Reservar Mesa
            </div>
          </div>
        </Col>

        {/* Columna del formulario */}
        <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
          <ReservationForm />
        </Col>
      
    </Container>
  );
};

export default ReservaView;