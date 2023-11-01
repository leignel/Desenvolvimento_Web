import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:user" element={<Home />} />
        <Route path="/login/:parametro" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
