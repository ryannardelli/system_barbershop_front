import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../../pages/public/Login";
import { Register } from "../../pages/public/Register";
import { SchedulersUser } from "../../pages/user/SchedulersUser";
import { HomeUser } from "../../pages/user/HomeUser";
export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedulers-client" element={<SchedulersUser />} />
      </Routes>
    </BrowserRouter>
  );
}
