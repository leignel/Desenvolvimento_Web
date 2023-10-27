import "./App.css";
import Bio from "./components/Bio";
import Botao from "./components/Botao";

function App() {
  const pessoas = [
    { nome: "Cristian Leignel", idade: 28 },
    { nome: "Ana Beatriz", idade: 24 },
    { nome: "Jose", idade: 67 },
  ];

  const title = [
    { title: "Editar" },
    { title: "Salvar" },
    { title: "Excluir" },
  ];

  return (
    <div className="App">
      <h1>Aula 02</h1>
      {/* Comentário */}
      {/* <Bio nome={pessoas[0].nome} idade={pessoas[0].idade} />
      <Bio nome={pessoas[1].nome} idade={pessoas[1].idade} />
      <Bio nome="José" idade="67" /> */}

      {pessoas.map((item, index) => (
        <Bio key={index} nome={item.nome} idade={item.idade} />
      ))}

      {/* <Botao title="Editar" />
      <Botao title="Salvar" />
      <Botao title="Excluir" /> */}

      {title.map((item, index) => (
        <Botao key={index} title={item.title} />
      ))}
    </div>
  );
}

export default App;
