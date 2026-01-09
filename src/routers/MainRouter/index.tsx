import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../../pages/public/Login";
import { Register } from "../../pages/public/Register";
import { SchedulersUser } from "../../pages/user/SchedulersUser";
import { HomeUser } from "../../pages/user/HomeUser";
import { ServicesUser } from "../../pages/user/ServicesUser";
import { ProfileUser } from "../../pages/user/ProfileUser";
import { PrivateRoute } from "../../components/PrivateRouter";
import { ProfessionalUser } from "../../pages/user/ProfessionalUser";
import { ManageServicesAdmin } from "../../pages/admin/ManageServicesAdmin";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas privadas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeUser />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileUser />
            </PrivateRoute>
          }
        />

        <Route
          path="/professionals"
          element={
            <PrivateRoute>
              <ProfessionalUser />
            </PrivateRoute>
          }
        />

        <Route
          path="/schedulers-client"
          element={
            <PrivateRoute>
              <SchedulersUser />
            </PrivateRoute>
          }
        />

        <Route
          path="/services-client"
          element={
            <PrivateRoute>
              <ServicesUser />
            </PrivateRoute>
          }
        />

        <Route
          path="/manage-services"
          element={
            <PrivateRoute>
              <ManageServicesAdmin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

