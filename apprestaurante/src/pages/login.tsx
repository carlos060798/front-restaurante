// LoginForm.js
import { Button, Form, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  

  return (
    <Container>
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Form className="border p-4 rounded col-12 col-md-6 col-lg-4 ">
        <h2 className="mb-4 text-center">Iniciar Sesión</h2>
        <Form className="mb-3">
          <Col xs={12} lg={12} className="text-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
             
            />
          </Col>
          <Col xs={12} lg={12} className="text-center">
            <FontAwesomeIcon icon={faLock} className="mr-4" />
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
             
            />
          </Col>
        </Form>
        <Button variant="primary" type="submit"  className="mx-auto d-block w-100 mt-3">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
    </Container>
  );
};

export default LoginForm;
