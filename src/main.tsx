import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import AuthProviderWithNavigate from "../auth/AuthProviderWithNavigate.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProviderWithNavigate>
          <AppRoutes />
        </AuthProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
