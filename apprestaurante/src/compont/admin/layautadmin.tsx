import Sidebar from "./componet/NavbarAdmin";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import UseLogin from "../../hooks/uselogin";

function LayautAdmin() {
  const {CerrarSeccion} = UseLogin();
  return (
    <>
      <Sidebar CerrarSeccion={CerrarSeccion} />

      <Row lg={9} md={9} xs={12} className="w-100 h-100">
        <Container>
          <Outlet />
        </Container>
      </Row>
    </>
  );
}

export default LayautAdmin;
