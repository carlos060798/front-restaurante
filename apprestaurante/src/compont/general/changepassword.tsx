import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import UseSendEmail from '../../hooks/useSendEmail';

const ChangePassword: React.FC = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const {handlechangePassword}= UseSendEmail();

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
    } else {
        setError(null);
        handlechangePassword(token, password);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="border p-4 rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Cambiar Contraseña</h2>
        <Form>
          <Form.Group controlId="formToken">
            <Form.Label>Token de Validación:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el token de validación"
              value={token}
              onChange={handleTokenChange}
              required
            />
          </Form.Group>
          {token && (
            <>
              <Form.Group controlId="formPassword">
                <Form.Label>Nueva Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese la nueva contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirmar Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme la nueva contraseña"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </Form.Group>
            </>
          )}
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="primary" onClick={handleSubmit} className="mt-3 w-100">
            Cambiar Contraseña
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;