import { NotificationManager } from "components/common/react-notifications";
import { post } from "contents/Conexao";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Label, Row } from "reactstrap";

export default function Cadastro() {
  const navegate = useNavigate();

  const onValidade = function (valores) {
    const { login, email, senha } = valores;
    const erros = {};

    if (typeof senha == "string" && senha.length < 5) {
      erros.senha = "A senha tem quer ter mais de 5 caracteres";
    }
    if (!/^[a-z]+$/i.test(login) || /[ÁÀÂÃÉÊÈÍÏÓÔÕÖÚÇÑ]/i.test(login)) {
      erros.login = "Só deve conter letrar";
    }
    if (typeof email == "string" && email.length < 5) {
      erros.email = "";
    }
    console.log(erros);
    return erros;
  };

  const onSubmit = (values) => {
    console.log(values);
    try {
      post("/cadastro", values).then(({ data }) => {
        if (data) {
          navegate("/", { replace: true });
        } else {
          NotificationManager.errorReduzida("Erro ao cadastrar", 2000);
        }
      });
    } catch (e) {
      console.log(e);
      NotificationManager.errorReduzida("Erro ao cadastrar", 20000000);
    }
  };

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
            <Formik
              initialValues={{ email: "", login: "", senha: "" }}
              validate={onValidade}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  <Row className="justify-content-center">
                    <Col xs="4">
                      <Label>Login</Label>
                      <Field
                        className="form-control"
                        type="text"
                        name="login"
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xs="4">
                      <Label>E-mail</Label>
                      <Field
                        className="form-control"
                        type="text"
                        name="email"
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xs="4">
                      <Label>Senha</Label>
                      <Field
                        className="form-control"
                        name="senha"
                        type="password"
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center mt-4">
                    <Col xs="4">
                      <Button
                        color="info"
                        type="submit"
                        className="w-100 btn-lg"
                      >
                        Cadastrar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
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
