import { Colxx } from "components/common/CustomBootstrap";
import { NotificationManager } from "components/common/react-notifications";
import { post } from "contents/Conexao";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, FormGroup, Label, Row } from "reactstrap";
import { login } from "redux/actions";

function Cadastro({ loginAction }) {
  const navegate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("background");
    document.body.classList.add("no-footer");

    return () => {
      document.body.classList.remove("background");
      document.body.classList.remove("no-footer");
    };
  }, []);

  const onValidade = function (valores) {
    const { nome, email, senha } = valores;
    const erros = {};

    if (typeof senha == "string" && senha.length < 5) {
      erros.senha = "A senha tem quer ter mais de 5 caracteres";
    }
    if (!/^[a-z]+$/i.test(nome) || /[ÁÀÂÃÉÊÈÍÏÓÔÕÖÚÇÑ]/i.test(nome)) {
      erros.nome = "Só deve conter só letras";
    }
    if (
      typeof email == "string" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      erros.email = "";
    }
    return erros;
  };

  const onSubmit = (values) => {
    // setLoading(false);
    if (loading) return;

    try {
      setLoading(true);
      post("/cadastro", values)
        .then(({ data }) => {
          if (data && data.ok === true) {
            loginAction(data.user);
            navegate("/", { replace: true });
          } else if (data.email) {
            NotificationManager.errorReduzida(
              "E-mail já cadastrado",
              2000,
              "filled"
            );
          } else {
            NotificationManager.errorReduzida(
              "Erro ao cadastrar",
              2000,
              "filled"
            );
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
      console.log("aqui", e);
      NotificationManager.errorReduzida("Erro ao cadastrar", 2000, "filled");
    }
  };

  return (
    <main>
      <div className="container">
        <Row className="h-100">
          <Colxx xxs="12" md="10" className="mx-auto my-auto">
            <Card className="auth-card">
              <div className="d-flex ml-3 mt-3 position-absolute">
                <Button
                  color="primary"
                  onClick={() => {
                    navegate(-1);
                  }}
                >
                  Voltar
                </Button>
              </div>
              <div className="form-side m-auto">
                <span className="logo-single h1 text-center">Cadastro</span>

                <Formik
                  initialValues={{}}
                  validate={onValidade}
                  onSubmit={onSubmit}
                >
                  {({ errors, touched }) => (
                    <Form
                      className="av-tooltip tooltip-label-bottom"
                      autocomplete="off"
                    >
                      <FormGroup className="form-group has-float-label">
                        <Label>Nome</Label>
                        <Field
                          className="form-control"
                          type="text"
                          name="nome"
                        />
                        {errors.nome && touched.nome && (
                          <div className="invalid-feedback d-block">
                            {errors.nome}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup className="form-group has-float-label">
                        <Label>E-mail</Label>
                        <Field
                          className="form-control"
                          type="text"
                          name="email"
                        />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup className="form-group has-float-label">
                        <Label>Senha</Label>
                        <Field
                          className="form-control"
                          type="password"
                          name="senha"
                          current-password="on"
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback d-block">
                            {errors.password}
                          </div>
                        )}
                      </FormGroup>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button
                          color="primary"
                          className={`btn-shadow btn-multiple-state w-100 rounded ${
                            loading ? "show-spinner" : ""
                          }`}
                          size="lg"
                          type="submit"
                        >
                          <span className="spinner d-inline-block">
                            <span className="bounce1" />
                            <span className="bounce2" />
                            <span className="bounce3" />
                          </span>
                          <span className="label">Cadastrar</span>
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Card>
          </Colxx>
        </Row>
      </div>
    </main>
  );
}

export default connect(undefined, {
  loginAction: login,
})(Cadastro);
