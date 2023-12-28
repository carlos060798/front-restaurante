import Sidebar from "./componet/NavbarAdmin";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function LayautAdmin() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <Container fluid>
        <Row>
          {/* Columna de Sidebar (3 columnas para tamaños grandes y medianos) */}
          <Col lg={3} md={3} xs={12} className="d-none d-md-block">
            {/* Contenido del Sidebar */}
          </Col>

          {/* Columna de Contenido (9 columnas para tamaños grandes y medianos) */}
          <Col lg={9} md={9} xs={12}>
            {/* Contenido principal */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LayautAdmin;
