import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://6542c27001b5e279de1f8a8c.mockapi.io/tasklist";

const TaskList = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  const cadastrar = () => {
    setTarefas([...tarefas, novaTarefa]);
    console.log([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  const excluirTarefa = (id) => {
    console.log("Excluir Tarefa: ", id);
    const novoArray = tarefas.filter((item) => item.id != id);
    console.log(novoArray);
    setTarefas(novoArray);
  };

  // async function getTasks(){}
  const getTasks = async () => {
    setLoading(true);
    try {
      // const dados = await fetch(
      //   "https://6542c27001b5e279de1f8a8c.mockapi.io/tasklist"
      // );
      // const infos = await dados.json();
      const { data } = await axios.get(url);
      console.log(data);
      setTarefas(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // O useEffect é executado logo após a montagem do componente na tela
  // UseEffect( () => {}, [])
  useEffect(() => {
    getTasks();
  }, []);

  // if (loading) return <h1>GARREGANDO...</h1>;

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
        {tarefas.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TaskList;
