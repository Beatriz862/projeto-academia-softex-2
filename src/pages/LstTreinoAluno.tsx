import { Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../style/LstTreinoAluno.css";
import CircularChart from "../components/CircularChart.tsx";

interface CardTreinoAlunoProps {
  titulo: string;
  professor: string;
  imagem?: string;
}

const CardTreinoAluno = ({ titulo, professor, imagem }: CardTreinoAlunoProps) => {
  const navigate = useNavigate();

  return (
    <div className="CardTreino">
      <img
        src={imagem ?? "/icons/default-musculo.png"}
        alt={titulo}
        className="ImagemMusculos"
      />

      <div className="CardTextos">
        <h3 className="NomeExercicio">{titulo}</h3>
        <p className="NomeProfessor">Prof. {professor}</p>
      </div>

      <button
        className="btnIniciar"
        onClick={() => navigate("/Exercicios")}
      >
        Iniciar ▶
      </button>
    </div>
  );
};

export default function LstTreinoAluno() {
  return (
    <div className="Tela">

      {/* Cabeçalho */}
      <header className="Header">
        <div className="HeaderPag">
          <User size={26} color="#fff" />
          <span>Olá, Jorge</span>
        </div>
        <Menu size={28} color="#fff" />
      </header>

      {/* Dashboard Circular */}
      <div className="DashboardCircular">
        <CircularChart value={75} />
        <p className="TextoDash">Desempenho semanal</p>
      </div>

      {/* Título */}
      <h2 className="TituloTreinos">Lista de Treinos</h2>

      {/* Lista */}
      <div className="ListaDeTreinos">
        <CardTreinoAluno
          titulo="Peito e Bíceps"
          professor="Paulo Pascal"
          imagem="/icons/default-musculo.png"
        />

        <CardTreinoAluno
          titulo="Costas e Tríceps"
          professor="Juliana Castro"
          imagem="/imagens/costas.jpg"
        />

        <CardTreinoAluno
          titulo="Pernas"
          professor="Marcos Ventura"
          imagem="/imagens/pernas.jpg"
        />

        <CardTreinoAluno
          titulo="Ombros"
          professor="Amanda Dias"
          imagem="/imagens/ombros.jpg"
        />

        <CardTreinoAluno
          titulo="HIIT"
          professor="Roberto Maia"
          imagem="/imagens/hiit.jpg"
        />

        <CardTreinoAluno
          titulo="Abdômen"
          professor="Clara Nogueira"
          imagem="/imagens/abs.jpg"
        />
      </div>

        {/* RODAPÉ */}
      <nav className="MenuInferior">
        <button className="BotaoPrincipal" onClick={() => window.location.href = "/LstTreinoAluno"} >📝 </button>
        <button className="BotaoPrincipal" onClick={() => window.location.href = "/AvaliacacaoFisicaAluno"}>📚 </button>
        <button className="BotaoPrincipal" onClick={() => window.location.href = "/DashboardAluno"}>🧭</button>
        <button className="BotaoPrincipal">🏆 </button>
        <button className="BotaoPrincipal">👤 </button>
      </nav>
    </div>
  );
}
