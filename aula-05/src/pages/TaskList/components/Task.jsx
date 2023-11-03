import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Task = ({ item, excluirTarefa }) => {
  return (
    <Card>
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">Editar</Button>
        <Button variant="danger">Excluir</Button>
      </Card.Body>
    </Card>
  );
};

export default Task;

// <div>
//   <h3>{item.title}</h3>
//   <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
// </div>
