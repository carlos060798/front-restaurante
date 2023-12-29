import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faList,
  faUser,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const navLinks = [
    { to: "/user/reservation", text: "Reservar", icon: faUtensils },
    { to: "/user/listreservation", text: "Lista de Reservas", icon: faList },
    { to: "/user/perfil", text: "Perfil", icon: faUser },
    { to: "/logout", text: "Cerrar Sesión", icon: faSignOutAlt },
  ];

  return (
    <Navbar expand="md" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          <FontAwesomeIcon icon={faCog} className="mr-2" />
          AppRestaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navLinks.map((link) => (
                <Nav.Link as={Link} to={link.to} key={link.to}>
                  <FontAwesomeIcon icon={link.icon} className="mr-2" />
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
