import { Outlet } from "react-router-dom";
import Sidebar from "./componet/NavbarAdmin";
import { Container } from "react-bootstrap";

function LayautAdmin() {
  return (
    <>
      <Sidebar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default LayautAdmin;
