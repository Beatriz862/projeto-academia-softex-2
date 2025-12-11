import { useParams } from "react-router-dom";

export default function Exercicios() {
  const { treinoId } = useParams();

  const exercicios = [
    { id: 1, nome: "Supino reto" },
    { id: 2, nome: "Fly machine" },
    { id: 3, nome: "Tríceps francês" },
  ];

  return (
    <div>
      <h1>Exercícios do treino {treinoId}</h1>

      {exercicios.map((e) => (
        <div key={e.id}>
          <p>{e.nome}</p>
          <button>Adicionar</button>
          <button>Editar</button>
        </div>
      ))}

        {/* RODAPÉ */}
      <nav className="MenuInferior">
        <button className="BotaoPrincipal" onClick={() => window.location.href = ""} >📝 </button>
        <button className="BotaoPrincipal" onClick={() => window.location.href = "/AvalicacaoFisicaAluno"}>📚 </button>
        <button className="BotaoPrincipal" onClick={() => window.location.href = ""}>🧭</button>
        <button className="BotaoPrincipal">🏆 </button>
        <button className="BotaoPrincipal">👤 </button>
      </nav>
    </div>
  );
}
