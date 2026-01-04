import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";

export function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
