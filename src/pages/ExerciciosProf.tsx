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

       {/* Menu inferior */}
      <nav className="footer">
        <button className="FtHome" onClick={() => window.location.href = "/PrescricaoTreino"}>
          
          <img src="/icons/home.png" className="LogoFooter" />
        </button>

        <button className="FtTreinos" onClick={() => window.location.href = ""}>
          
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtRanking" onClick={() => window.location.href = ""}>
          
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtProfile" onClick={() => window.location.href = ""}>
          
          <img src="" className="LogoFooter" />
        </button>
      </nav>
    </div>
  );
}
