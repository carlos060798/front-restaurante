
import { Link } from 'react-router-dom';
import { Button, Form, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import useLogin from '../hooks/uselogin';

const LoginForm = () => {
  const { handleChangeUser, handleSeccion, DataUser } = useLogin();

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Form className="border p-4 rounded col-12 col-md-6 col-lg-4 shadow" onSubmit={handleSeccion}>
          <h2 className="mb-4 text-center">Iniciar Sesión</h2>
          <Form.Group as={Col} xs={12} lg={12} className="mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="correo"
              onChange={handleChangeUser}
              value={DataUser.correo}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} lg={12} className="mb-3">
            <FontAwesomeIcon icon={faLock} className="mr-3" />
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              onChange={handleChangeUser}
              value={DataUser.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Iniciar Sesión
          </Button>
          <p className="mt-3 text-center">
            ¿No tienes cuenta?{' '}
            <Link to="/send-email/password" className="text-primary">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <p className="mt-3 text-center">
            ¿No tienes cuenta?{' '}
            <Link to="/" className="text-primary">
              Regístrate aquí
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;

