import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import FormUser from '../compont/general/FormUser';

const HomePage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
     
        {/* Columna 1 - Título y Bienvenida */}
        <Col md={6} className="text-center my-5">
          <FontAwesomeIcon icon={faUser} className="display-4 mb-4 text-primary" />
          <h2>Bienvenido a nuestra aplicación</h2>
          <p>Regístrate para comenzar tu experiencia y aprovechar al máximo nuestros servicios.</p>
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          
        </Col>

        {/* Columna 2 - Formulario */}
        <Col md={6}>
          <FormUser/>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;