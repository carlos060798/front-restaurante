/*import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faEnvelope, faLock, faSignInAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';
import useRegistrarUser from '../../hooks/useRegister';

function FormUser() {
  const {
    handleChange,
    handleRegistro,
    formData,
  }=useRegistrarUser()
    return ( <>
         <Form className="bg-light p-4 rounded" onSubmit={handleRegistro}>
          <Form.Group controlId="formFirstName">
              <Form.Label><FontAwesomeIcon icon={faUser} className="mr-2" />Nombre</Form.Label>
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
              <Form.Label><FontAwesomeIcon icon={faIdCard} className="mr-2" />Tipo de Documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el tipo de documento"
                name="tipoDeIdentificacion"
                className="rounded-pill"
                onChange={handleChange}
                value={formData.tipoDeIdentificacion}
              />
            </Form.Group>

            <Form.Group controlId="formDocumentNumber">
              <Form.Label><FontAwesomeIcon icon={faIdCard} className="mr-2" />Número de Documento</Form.Label>
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
              <Form.Label><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Email</Form.Label>
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
              <Form.Label><FontAwesomeIcon icon={faLock} className="mr-2" />Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                className="rounded-pill"
                onChange={handleChange}
                value={formData.password}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label><FontAwesomeIcon icon={faLock} className="mr-2" />Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="paswworpassword"
                className="rounded-pill"
                onChange={handleChange}
                value={e => e.target.value}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 rounded-pill mt-3">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Crear cuenta
            </Button>
          </Form>
    </> );
}

export default FormUser; */

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSignInAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';
import useProfile from '../../hooks/useProfile';

function FormProfile() {
  const { profileData, formData, handleChange, handleUpdateProfile } = useProfile();

  return (
    <>
      <Form className="bg-light p-4 rounded" onSubmit={handleUpdateProfile}>
        <Form.Group controlId="formFirstName">
          <Form.Label><FontAwesomeIcon icon={faUser} className="mr-2" />Nombre</Form.Label>
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
          <Form.Label><FontAwesomeIcon icon={faIdCard} className="mr-2" />Tipo de Documento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el tipo de documento"
            name="tipoDeIdentificacion"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.tipoDeIdentificacion}
          />
        </Form.Group>

        <Form.Group controlId="formDocumentNumber">
          <Form.Label><FontAwesomeIcon icon={faIdCard} className="mr-2" />Número de Documento</Form.Label>
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
          <Form.Label><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Email</Form.Label>
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
          <Form.Label><FontAwesomeIcon icon={faLock} className="mr-2" />Nueva Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            name="password"
            className="rounded-pill"
            onChange={handleChange}
            value={formData.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 rounded-pill mt-3">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          Actualizar Perfil
        </Button>
      </Form>
    </>
  );
}

export default FormProfile;