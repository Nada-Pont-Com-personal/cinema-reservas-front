import "./assets/css/sass/App.scss";
import Rotas from "router/rotas";
import { NotificationContainer } from "components/common/react-notifications";
import { useEffect } from "react";
import { get } from "contents/Conexao";
import { connect } from "react-redux";
import { login } from "redux/actions";

function App({ loginAction }) {
  useEffect(() => {
    get("/sessao").then(({ data }) => {
      if (typeof data == "object") {
        loginAction(data);
      }
    });
  }, [loginAction]);

  return (
    <div className="App h-100">
      <NotificationContainer />
      <Rotas />
    </div>
  );
}

export default connect(undefined, { loginAction: login })(App);
