import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const  NotFound404Alternate = () => {
  const navigate = useNavigate();

  const handleBack= () => {
    // Redirigir al enlace previo
    navigate(-1);
  };
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <FontAwesomeIcon icon={faExclamationTriangle} size="4x" color="#ffc107" />
          <h1 className="mt-3">Error 404</h1>
          <p>Oops, algo salió mal. La página que buscas no se encuentra.</p>
          <Button  variant="warning" onClick={handleBack}>
            Volver a la Página Principal
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export { NotFound404Alternate };