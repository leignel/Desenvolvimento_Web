export default function Bio(props) {
  return (
    <div>
      <h1>BIO</h1>
      <h2>Nome: {props.nome}</h2>
      <h2>Idade: {props.idade}</h2>
    </div>
  );
}
