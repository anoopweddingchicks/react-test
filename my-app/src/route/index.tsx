import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Dashboard from "../react-dashboard/pages/dashboard";
export default function MainRoutes() {
  return (
    <Routes>
      <Route
        element={
          <div>
            <Home />
          </div>
        }
        path="/"
        key="/"
      />
      <Route
        element={
          <div>
            <Login />
          </div>
        }
        path="/login"
        key="/login"
      />
      <Route
        element={
          <div>
            <Dashboard />
          </div>
        }
        path="/dashboard"
        key="/dashboard"
      />
    </Routes>
  );
}
