import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function Menu() {
    return (<>
     <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className='d-flex  justify-content-between my-1'>
        <Nav className="mr-auto">
          <Navbar.Brand as={Link} to="/">
            <h4 className='fw-bold'><FontAwesomeIcon icon={faUtensils} className="mr-2" />Restaurante App </h4>
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/login">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Iniciar Sesión
          </Nav.Link>
        </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
      
    </>  );
}

export default Menu;