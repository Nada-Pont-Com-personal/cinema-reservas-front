import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Entrar, Cadastro, Reserva } from "view/views";

import Error from "error";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
