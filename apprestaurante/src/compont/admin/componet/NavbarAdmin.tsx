import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faUser, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Sidebar para tamaños grandes y medianos */}
      <Nav className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-sticky">
          <Nav.Item>
            <Nav.Link as={Link} to="/user/reservation">
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Reservar
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/user/listreservation">
              <FontAwesomeIcon icon={faList} className="mr-2" />
              Lista de Reservas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/user/perfil">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Perfil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Cerrar Sesión
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>

      {/* Botón para mostrar/ocultar el menú en tamaños pequeños */}
      <Navbar.Toggle aria-controls="sidebar" className="d-md-none" onClick={toggleSidebar} />

      {/* Botón de hamburguesa en tamaños pequeños */}
      <Navbar.Collapse id="sidebar" className="justify-content-end">
        <Button variant="outline-dark" onClick={toggleSidebar} className="ml-auto">
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </Navbar.Collapse>
    </>
  );
};

export default Sidebar;