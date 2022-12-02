import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "reactstrap";

export default function Error() {
  const navegate = useNavigate();

  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <Card className="rounded p-4 h-75 w-60 d-flex">
        <Row className="h-100">
          <Col
            xs="12"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="h1">Pagina não encontada</div>
          </Col>
          <Col xs="2" className="d-flex position-absolute">
            <Button
              color="info"
              onClick={() => {
                navegate("/");
              }}
            >
              Voltar ao Inicio
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
