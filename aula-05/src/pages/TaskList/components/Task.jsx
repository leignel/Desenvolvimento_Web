const Task = ({ item, excluirTarefa }) => {
  return (
    <div>
      <div key={item.id}>
        <h3>{item.title}</h3>
        <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default Task;
