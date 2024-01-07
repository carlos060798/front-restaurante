import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import UseSendEmail from '../../hooks/useSendEmail';

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const {handlechangeEmail}= UseSendEmail();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert('Se ha enviado un correo de cambio de contraseña a ' + formData.email);
    handlechangeEmail(formData.email, {
      asunto: 'Cambio de Contraseña',
      mensaje: 'Haz click en el siguiente enlace para cambiar tu contraseña',
      link: 'http://localhost:5173/change-password',
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="border p-4 rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Cambio de Contraseña</h2>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>
              <FontAwesomeIcon icon={faEnvelope} /> Correo Electrónico:
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={formData.email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit} className="mt-3 w-100">
            Enviar Correo
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;


