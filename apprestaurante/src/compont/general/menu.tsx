import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function Menu() {
    return (     <Navbar bg="light" variant="light">
    <Container className='d-flex justify-content-between my-1'>
      <Nav>
        <Navbar.Brand as={Link} to="/">
          <h2 className='fw-bold'><FontAwesomeIcon icon={faUtensils} className="mr-2 text-primary" /></h2>
        </Navbar.Brand>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/login" className="mr-2 text-primary">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2 " />
          Iniciar Sesión
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)
}

export default Menu;