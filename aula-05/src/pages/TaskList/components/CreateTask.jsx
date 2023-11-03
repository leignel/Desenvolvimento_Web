import React from "react";

const CreateTask = ({ novaTarefa, setNovaTarefa, cadastrar }) => {
  return (
    <>
      <h2>Cadastre sua tarefa</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={cadastrar} className="m-4 btn btn-primary">
        Cadastrar
      </button>
    </>
  );
};

export default CreateTask;
