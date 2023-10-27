// export default function Botao(props) {
export default function Botao({ title }) {
  function mensagem() {
    // console.log("Eu sou o botão: " + props.title);
    console.log("Eu sou o botão: " + title);
  }
  return (
    <button onClick={mensagem} style={{ marginRight: 10, padding: 15 }}>
      {title}
    </button>
  );
}
