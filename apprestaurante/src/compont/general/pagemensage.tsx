import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck } from '@fortawesome/free-solid-svg-icons';
import  useLogin  from '../../hooks/uselogin'

// Componente de Éxito de Envío de Correo
const EmailSentSuccess = () => {

 const{handlesendemail} = useLogin();

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <FontAwesomeIcon icon={faCheck} size="4x" color="#28a745" />
          <h1 className="mt-3">Correo Enviado Exitosamente</h1>
          <p>Se ha enviado un correo con instrucciones para iniciar sesión. Por favor, revisa tu bandeja de entrada.</p>
          <Button variant="success" onClick={handlesendemail}>
            Reenviar Correo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailSentSuccess;