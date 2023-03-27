import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Basket } from "./components";
import "./index.scss";
import { store } from "./redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Basket />
    </Provider>
  </React.StrictMode>
);
