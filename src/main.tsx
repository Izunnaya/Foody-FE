import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import AuthProviderWithNavigate from "../auth/AuthProviderWithNavigate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProviderWithNavigate>
        <AppRoutes />
      </AuthProviderWithNavigate>
    </Router>
  </StrictMode>
);
