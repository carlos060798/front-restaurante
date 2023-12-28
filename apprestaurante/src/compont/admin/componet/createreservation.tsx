import {Container, Row, Col } from "react-bootstrap";
import ReservationForm from "./ReservationForm";

function CreateRerseva() {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100">
        <Col md={8} lg={6} xl={4} className="mx-auto">
          <h2 className="text-center mb-4">Crear Reserva</h2>
          <ReservationForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateRerseva;
