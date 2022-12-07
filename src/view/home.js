import { post } from "contents/Conexao";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { login } from "redux/actions";

import "../assets/css/sass/home.scss";

function Home({ sessao, loginAction }) {
  const navegate = useNavigate();

  return (
    <Row className="h-100">
      <Col xs="12">
        <div className="cabecalho d-flex mx-4 py-2 align-items-center justify-content-end">
          {sessao !== "convidado" ? (
            <Button
              color="primary"
              className="btn-sm"
              onClick={() => {
                post("/sair");
                loginAction("convidado");
              }}
            >
              Sair
            </Button>
          ) : (
            <>
              <NavLink to="/entrar">Entrar</NavLink>
              <div className="m-2">ou</div>
              <Button
                color="primary"
                className="btn-sm"
                onClick={() => navegate("/cadastro")}
              >
                Cadastro
              </Button>
            </>
          )}
        </div>
      </Col>
      <Col className="h-100 d-flex flex-column align-items-center justify-content-center">
        <Button
          color="primary"
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

const mapToProps = ({ settings }) => {
  const { sessao } = settings;
  return { sessao };
};

export default connect(mapToProps, { loginAction: login })(Home);
