import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Importera vår Redux store
import App from "./App";
import "./styles/_globals.scss"; // En global SASS-fil

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* 👈 Vikigt! Redux behöver detta */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);