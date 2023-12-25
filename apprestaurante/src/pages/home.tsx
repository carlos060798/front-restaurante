import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSignInAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';

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
          <Form className="bg-light p-4 rounded">
          <Form.Group controlId="formFirstName">
              <Form.Label><FontAwesomeIcon icon={faUser} className="mr-2" />Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="firstName"
                className="rounded-pill"
              />
            </Form.Group>
            <Form.Group controlId="formDocumentType">
              <Form.Label><FontAwesomeIcon icon={faIdCard} className="mr-2" />Tipo de Documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el tipo de documento"
                name="documentType"
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="formDocumentNumber">
              <Form.Label><FontAwesomeIcon icon={faIdCard} className="mr-2" />Número de Documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el número de documento"
                name="documentNumber"
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label><FontAwesomeIcon icon={faLock} className="mr-2" />Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                className="rounded-pill"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 rounded-pill mt-3">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Crear cuenta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;