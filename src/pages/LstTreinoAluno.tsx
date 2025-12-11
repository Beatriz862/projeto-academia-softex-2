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
      <button className="btnIniciar" onClick={() => window.location.href = "/Exercicios"}>
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
export default function Treinos() {
  return (
    <div className="Tela">

      {/* Topo */}
      <header className="Header">
        <div className="HeaderPag">
          <User size={26} />
          <span>Olá, Jorge</span>
        </div>
        <Menu size={28} />
      </header>

      {/* Título */}
      <h2 className="TituloTreinos">Lista de Treinos</h2>

      {/* Lista de treinos */}
      <div className="ListaDeTreinos">

        <CardTreinoAluno
          titulo="Peito e Bíceps"
          professor="Paulo Pascal"
          imagem="/imagens/peito.jpg"
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

      {/* Menu inferior */}
      <nav className="footer">
        
        <button className="FtHome" onClick={() => window.location.href = "/DashboardAluno"}>
          <img src="/icons/home.png" className="LogoFooter" />
        </button>
        
        <button className="FtTreinos" onClick={() => window.location.href = "/LstTreinoAluno"}>
          <img src="" className="LogoFooter" />
        </button>
  
        <button className="FtRanking" onClick={() => window.location.href = ""}> {/*link da gameficacao*/}
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtAvaliacao" onClick={() => window.location.href = "/AvalicacaoFisicaAluno"}>
          <img src="" className="LogoFooter" />
        </button>
      </nav>
    </div>
  );
}
