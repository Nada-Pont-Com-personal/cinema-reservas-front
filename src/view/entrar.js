import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, FormGroup, Label, Row } from "reactstrap";
import { Field, Form, Formik } from "formik";

import { NotificationManager } from "components/common/react-notifications";
import { Colxx } from "components/common/CustomBootstrap";
import { post } from "contents/Conexao";
import { login } from "redux/actions";

function Entrar({ loginAction }) {
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
    const { email, senha } = valores;
    const erros = {};

    if (typeof senha == "string" && senha.length < 5) {
      erros.senha = "A senha tem quer ter mais de 5 caracteres";
    }

    if (
      typeof email == "string" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      erros.email = "E-mail invalido";
    }
    return erros;
  };

  const onSubmit = (values) => {
    // setLoading(false);
    if (loading) return;

    try {
      setLoading(true);
      post("/entrar", values)
        .then(({ data }) => {
          console.log(data, data.ok === true);
          if (data && data.ok === true) {
            loginAction(data.user);
            console.log("aqui", data);

            navegate("/", { replace: true });
          } else {
            NotificationManager.errorReduzida(
              "E-mail ou senha invalido",
              2000,
              "filled"
            );
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
      console.log("aqui", e);
      NotificationManager.errorReduzida("Erro ao entrar", 2000, "filled");
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
                <span className="logo-single h1 text-center">Entrar</span>

                <Formik
                  initialValues={{ email: "", senha: "" }}
                  validate={onValidade}
                  onSubmit={onSubmit}
                >
                  {({ errors, touched }) => (
                    <Form
                      className="av-tooltip tooltip-label-bottom"
                      autocomplete="off"
                    >
                      <FormGroup className="form-group has-float-label">
                        <Label>E-mail</Label>
                        <Field
                          className="form-control"
                          name="email"
                          autocomplete="off"
                        />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup className="form-group has-float-label">
                        <Label>senha</Label>
                        <Field
                          className="form-control"
                          type="password"
                          name="senha"
                          current-password="on"
                        />
                        {errors.senha && touched.senha && (
                          <div className="invalid-feedback d-block">
                            {errors.senha}
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
                          <span className="label">Entrar</span>
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
})(Entrar);
