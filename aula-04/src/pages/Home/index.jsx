import { useParams } from "react-router-dom";

function Home() {
  const { user } = useParams();

  return (
    <>
      <h1>Home</h1>
      {user == undefined ? <h2>Olá Visitante!!!</h2> : <h2>Olá {user}</h2>}
    </>
  );
}

export default Home;
