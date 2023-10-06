import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";
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
