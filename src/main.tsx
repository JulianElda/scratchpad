import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";

import App from "./app.tsx";

// biome-ignore lint/style/noNonNullAssertion: <react root>
ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
