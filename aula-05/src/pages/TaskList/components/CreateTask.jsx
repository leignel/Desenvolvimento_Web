import React from "react";
import { Titulo, TituloAmarelo } from "./styledComponents";

const CreateTask = ({ novaTarefa, setNovaTarefa, cadastrar }) => {
  return (
    <>
      <Titulo>Cadastre sua tarefa</Titulo>
      <TituloAmarelo>Cadastre sua tarefa</TituloAmarelo>
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
