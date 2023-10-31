import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {
    console.log("Função entrar");
    if (login == "" || senha == "") {
      console.log("Preencha os campos de login e senha");
    } else {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);
      setLogin("");
      setSenha("");
    }
  };

  return (
    <>
      <h1>Página de Login</h1>

      <form>
        <input
          type="text"
          placeholder="Digite o seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="button" onClick={entrar}>
          Entrar
        </button>
      </form>
    </>
  );
}
export default Login;
