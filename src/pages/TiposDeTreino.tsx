import { useParams } from "react-router-dom";

export default function TiposDeTreino() {
  const { alunoId } = useParams();

  const tipos = [
    { id: 1, nome: "Peito e Bíceps" },
    { id: 2, nome: "Glúteo" },
  ];

  return (
    <div>
      <h1>Tipos de Treino do aluno {alunoId}</h1>

      {tipos.map(t => (
        <div key={t.id}>
          <p>{t.nome}</p>
          <button>Editar</button>
          <button>Remover</button>
        </div>
      ))}

      <button>Adicionar novo tipo</button>

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
