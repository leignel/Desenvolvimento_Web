import "./App.css";
import Hello from "./components/Hello";
import MeuNome from "./components/MeuNome";

function App() {
  // Criar funções, estados(variáveis), etc...
  function clique() {
    console.log("Fui Clicado");
  }

  return (
    <div className="App">
      <Hello />
      {/* Comentários aqui */}
      <MeuNome />
      <button onClick={clique}>Clique Aqui</button>
    </div>
  );
}

export default App;
