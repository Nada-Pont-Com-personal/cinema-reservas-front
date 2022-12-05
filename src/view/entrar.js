import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";

export default function Entrar() {
  const navegate = useNavigate();

  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <Card className="rounded p-4 h-75 w-60 d-flex">
        <Row className="h-100">
          <Col
            xs="12"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="h1">Entrar</div>
          </Col>
          <Col>
            <Row className="justify-content-center">
              <Col xs="4">
                <Label>Login</Label>
                <Input type="text" />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="4">
                <Label>Senha</Label>
                <Input type="password" />
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs="4">
                <Button color="info" className="w-100 btn-lg">
                  Entrar
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs="2" className="d-flex position-absolute">
            <Button
              color="info"
              onClick={() => {
                navegate(-1);
              }}
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
