


import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FormUser from './FormUserEdit';
function Profile() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <div className="text-center">
            <FontAwesomeIcon icon={faUser} size="4x" color="#007bff" />
            <h1 className="mt-3">Perfil</h1>
          </div>
          <FormUser />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;