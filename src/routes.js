//Aqui ficará as configurações das rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Erro from "./pages/Erro";  // apresenta o erro caso a página não exista

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header /> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}