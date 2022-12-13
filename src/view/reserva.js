import { Button, Card, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

import { Colxx } from "components/common/CustomBootstrap";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

export default function Reserva() {
  const navegate = useNavigate();

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    document.body.classList.add("background");
    document.body.classList.add("no-footer");

    return () => {
      document.body.classList.remove("background");
      document.body.classList.remove("no-footer");
    };
  }, []);

  return (
    <main>
      <div className="container">
        <Row className="h-100">
          <Colxx xxs="12" md="10" className="m-auto h-100 d-flex">
            <Card className="auth-card h-75 w-100 m-auto">
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
              <div className="w-100 h-100 p-5 d-flex">
                <div className="w-40 my-auto">
                  <Calendar
                    onChange={onChange}
                    value={value}
                    className="rounded"
                  />
                </div>
                <div className="d-flex w-60 my-auto h-75">
                  <Card className="m-auto w-80 h-100 p-4">
                    Lista com horario / filme
                  </Card>
                </div>
              </div>
            </Card>
          </Colxx>
        </Row>
      </div>
    </main>
  );
}
