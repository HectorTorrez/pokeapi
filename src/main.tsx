import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.tsx";
import { TeamsProvider } from "./context/TeamsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TeamsProvider>
      <RouterProvider router={router} />
    </TeamsProvider>
  </React.StrictMode>
);
