import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


// Componente de Error 404 Alternativo
const NotFound404Alternate = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <FontAwesomeIcon icon={faExclamationTriangle} size="4x" color="#ffc107" />
          <h1 className="mt-3">Error 404</h1>
          <p>Oops, algo salió mal. La página que buscas no se encuentra.</p>
          <Button as={Link} to="/" variant="warning">
            Volver a la Página Principal
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export { NotFound404Alternate };