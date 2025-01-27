import Layout from "./layouts/layout";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>user profile</span>}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default AppRoutes;
