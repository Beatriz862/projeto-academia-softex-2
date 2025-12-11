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
        onClick={() => navigate("/TreinoDetalhes")}
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
          professor="Natália Duarte"
        />
      </div>

      {/* Footer */}
      <nav className="footer">
        <button className="FtHome">
          <img src="/icons/home.png" className="LogoFooter" />
        </button>

        <button className="FtTreinos">
          <img src="/icons/treinos.png" className="LogoFooter" />
        </button>

        <button className="FtRanking">
          <img src="/icons/ranking.png" className="LogoFooter" />
        </button>

        <button className="FtProfile">
          <img src="/icons/profile.png" className="LogoFooter" />
        </button>
      </nav>
    </div>
  );
}
