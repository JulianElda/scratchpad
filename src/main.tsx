import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.tsx";
import "./tailwind.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
