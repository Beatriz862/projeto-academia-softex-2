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
