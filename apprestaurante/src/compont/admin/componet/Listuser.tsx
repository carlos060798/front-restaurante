
import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../general/loading";
import UseAdmin from "../../../hooks/useAdmin";

interface User {
  id: string;
  nombres: string;
  tipoDeIdentificacion: string;
  identificacion: string;
  correo: string;
}

function ListUser() {
  const { users, getdatausers, deleteuser } = UseAdmin();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getdatausers();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getdatausers]);

  return (
    <Container>
                    <h3 className="text-center fw-bold text-primary">Lista de usuarios</h3>

      {loading ? (
        <LoadingSpinner />
      ) : (

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="text-primary">Id</th>
              <th className="text-primary">Nombres</th>
              <th className="text-primary">Tipo ID</th>
              <th className="text-primary">Número de ID</th>
              <th className="text-primary">Correo</th>
              <th className="text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user: User) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nombres}</td>
                  <td>{user.tipoDeIdentificacion}</td>
                  <td>{user.identificacion}</td>
                  <td>{user.correo}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteuser(user.id)}>
                      <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default ListUser;