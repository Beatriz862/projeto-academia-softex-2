import "../style/Login.css";
import { Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardTreinoAlunoProps {
  titulo: string;
  professor: string;
  imagem: string;
}



const CardTreinoAluno = ({ titulo, professor, imagem }: CardTreinoAlunoProps) => {
  const navigate = useNavigate();

  return (
    <div className="CardTreino">
      <img
        src={imagem}
        alt={titulo}
        className="ImagemMusculos"
      />

      <div className="CardTextos">
        <h3 className="NomeExercicio">{titulo}</h3>
        <p className="NomeProfessor">Prof. {professor}</p>
      </div>

      <button className="btnIniciar" onClick={() => window.location.href = "/Exercicios"}>
        Iniciar ▶
      </button>
    </div>
  );
};



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

      {/* Titulo */}
      <h2 className="TituloTreinos">
        Lista de Treinos
      </h2>

      {/* Lista de treinos */}
      <div className="ListaDeTreinos">

        <CardTreinoAluno
          titulo="Peito e Bíceps"
          professor="Paulo Pascal"
          imagem=""
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
