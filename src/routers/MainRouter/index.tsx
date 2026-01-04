import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../../pages/public/Login";
import { Register } from "../../pages/public/Register";
import { SchedulersUser } from "../../pages/user/SchedulersUser";
import { HomeUser } from "../../pages/user/HomeUser";
import { ServicesUser } from "../../pages/user/ServicesUser";
import { ProfileUser } from "../../pages/user/ProfileUser";
export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<HomeUser />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/schedulers-client" element={<SchedulersUser />} />
        <Route path="/services-client" element={<ServicesUser />} />
      </Routes>
    </BrowserRouter>
  );
}
