import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "redux/store";

import reportWebVitals from "./reportWebVitals";

import "./assets/css/sass/index.scss";
import "./assets/css/sass/main.scss";
import "./assets/css/vendor/bootstrap.min.css";

const App = React.lazy(() => import(/* webpackChunkName: "App" */ "./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  return (
    <Provider store={configureStore()}>
      <Suspense fallback={<div className="loading" />}>
        <App />
      </Suspense>
    </Provider>
  );
}

root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
