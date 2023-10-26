import "./App.css";
import Bio from "./components/Bio";
import Botao from "./components/Botao";

function App() {
  return (
    <div className="App">
      <h1>Aula 02</h1>
      {/* Comentário */}
      <Bio nome="Cristian Leignel" idade="28" />
      <Bio nome="Ana Beatriz" idade="25" />
      <Bio nome="José" idade="67" />
      {/* CRIAR UM COMPONENTE BOTAO */}
      <Botao titulo="Botao 1" />
      <Botao titulo="Botao 2" />
      <Botao titulo="Botao 3" />
    </div>
  );
}

export default App;
