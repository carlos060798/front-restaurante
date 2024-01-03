import { Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faSignInAlt,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import useRegistrarUser from "../../hooks/useRegister";

function FormUser() {
  const { handleChange, handleRegistro, formData } = useRegistrarUser();

  return (
    <>
    <Col xs={12} md={10} lg={8} >  
      <Form className="bg-light p-4 rounded" onSubmit={handleRegistro}>
        <Form.Group controlId="formFirstName">
          <Form.Label>
            <FontAwesomeIcon icon={faUser} className="mr-2 text-primary" />
            Nombre
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="nombres"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.nombres}
          />
        </Form.Group>

        <Form.Group controlId="formDocumentType">
          <Form.Label>
            <FontAwesomeIcon icon={faIdCard} className="mr-2 text-primary" />
            Tipo de Documento
          </Form.Label>
          <Form.Control
            as="select"
            name="tipoDeIdentificacion"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.tipoDeIdentificacion}
          >
            <option value="">Selecciona...</option>
            <option value="Cc">Cc</option>
            <option value="Ti">Ti</option>
            <option value="Ce">Ce</option>
            <option value="Pt">Pt</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formDocumentNumber">
          <Form.Label>
            <FontAwesomeIcon icon={faIdCard} className="mr-2 text-primary" />
            Número de Documento
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el número de documento"
            name="identificacion"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.identificacion}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary" />
            Email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            name="correo"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.correo}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>
            <FontAwesomeIcon icon={faLock} className="mr-2 text-primary" />
            Nueva Contraseña
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            name="password"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.password}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>
            <FontAwesomeIcon icon={faLock} className="mr-2 text-primary" />
            Repetir Contraseña
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            name="confirmPassword"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 rounded-pill mt-3"
        >
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2 text-primary" />
          Crear Cuenta
        </Button>
      </Form>
      </Col>
    </>
  );
}

export default FormUser;
