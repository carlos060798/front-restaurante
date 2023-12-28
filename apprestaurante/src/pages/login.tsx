import { Button, Form, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import useLogin from '../hooks/uselogin';

const LoginForm = () => {
  const { handleChangeUser, handleSeccion, DataUser } = useLogin();

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Form className="border p-4 rounded col-12 col-md-6 col-lg-4 " onSubmit={handleSeccion}>
          <h2 className="mb-4 text-center">Iniciar Sesión</h2>
          <Col xs={12} lg={12} className="text-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="correo"
              onChange={handleChangeUser}
              value={DataUser.correo}
            />
          </Col>
          <Col xs={12} lg={12} className="text-center">
            <FontAwesomeIcon icon={faLock} className="mr-4" />
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              onChange={handleChangeUser}
              value={DataUser.password}
            />
          </Col>
          {/* Elimina este formulario interno */}
          {/* <Form>...</Form> */}
          <Button variant="primary" type="submit" className="mx-auto d-block w-100 mt-3">
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;
