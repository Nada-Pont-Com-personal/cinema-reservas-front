import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "view/home";
import Error from "error";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
