import { Container, Nav, Navbar, Offcanvas,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faUser, faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/uselogin";

function SidebarAdmin() {
  const { CerrarSeccion } = useLogin();

  return (
    <Navbar expand="md" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="#">
          <h4 className="fw-bold">
            <FontAwesomeIcon icon={faCog} className="mr-2 fw-bold text-primary" />
            RestaurantApp
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Navbar.Offcanvas
            placement="end"
            className="w-75" // Ajusta el ancho según sea necesario
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                AppRestaurant
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/admin/listreservations">
                  <FontAwesomeIcon icon={faList} className="mr-2" />
                  Ver Reservas
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/listusers">
                  <FontAwesomeIcon icon={faList} className="mr-2" />
                  Ver Usuarios
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/perfil">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Ver Perfil
                </Nav.Link>
                <Nav.Link as={Button}  onClick={CerrarSeccion}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Cerrar Sesión
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SidebarAdmin;