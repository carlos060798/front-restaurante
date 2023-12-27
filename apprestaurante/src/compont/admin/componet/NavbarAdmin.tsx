import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav.Item>
          <Nav.Link as={Link} to="/reservation">
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Reservar
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/listreservation">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Lista de Reservas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/perfil">
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
  );
};

export default Sidebar;