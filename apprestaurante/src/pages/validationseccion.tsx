import { Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useLogin from "../hooks/uselogin";
function Validseccion() {
  const { ValidarToken } = useLogin();
  const { token } = useParams();
 
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: "30rem" }} className="p-4">
          <h2 className="text-center mb-4">
            Bienvenido a la Página de Inicio
            <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
          </h2>
          <Button
            variant="success"
            className="w-100 mb-3"
            onClick={() =>token &&  ValidarToken(token)}
          >
            Validar Token
          </Button>

          <p className="mt-3 text-center">
            <Link to="/login">Regresar al inicio de sesión</Link>
          </p>
        </Card>
      </Container>
    </>
  );
}

export default Validseccion;
