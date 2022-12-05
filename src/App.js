import "./assets/css/sass/App.scss";
import Rotas from "router/rotas";
import { NotificationContainer } from "components/common/react-notifications";

function App() {
  return (
    <div className="App h-100">
      <NotificationContainer />
      <Rotas />
    </div>
  );
}

export default App;
