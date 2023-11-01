import { useState } from "react";

const TaskList = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const cadastrar = () => {
    setTarefas([...tarefas, novaTarefa]);
    console.log([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  const excluirTarefa = (ind) => {
    console.log("Excluir Tarefa: ", ind);
    const novoArray = tarefas.filter((item, index) => index != ind);
    console.log(novoArray);
    setTarefas(novoArray);
  };

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <section>
        <h2>Cadastre sua tarefa</h2>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={cadastrar}>Cadastrar</button>
      </section>
      <section>
        <h2>Lista de Tarefas</h2>
        {tarefas.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <button onClick={() => excluirTarefa(index)}>Excluir</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TaskList;
