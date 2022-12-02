import { NavLink, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

import "../assets/css/sass/home.scss";

export default function Home() {
  const navegate = useNavigate();

  return (
    <Row className="h-100">
      <Col xs="12">
        <div className="cabecalho d-flex mx-4 py-2 align-items-center justify-content-end">
          <NavLink to="/entrar">Entrar</NavLink>
          <div className="m-2">ou</div>
          <Button
            color="info"
            className="btn-sm"
            onClick={() => navegate("/cadastro")}
          >
            Cadastro
          </Button>
        </div>
      </Col>
      <Col className="h-100 d-flex flex-column align-items-center justify-content-center">
        <Button
          color="info"
          className="m-2 h1 btn-large"
          onClick={() => navegate("/reserva")}
        >
          Reserva
        </Button>
        <NavLink to="/consulta">Consultar</NavLink>
      </Col>
    </Row>
  );
}
