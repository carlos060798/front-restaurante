


import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FormUser from './FormUserEdit';
function Profile() {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={4}>
          <div className="text-center">
            <FontAwesomeIcon icon={faUser} size="2x" color="#007bff" />
          </div>
          <FormUser />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;