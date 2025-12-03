import "../style/Login.css";
import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";



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


    

      <div className="BotãoDashboard">
        <img src="" alt="" className="LogoExercicioDB"/>
        {/* <h2 className="TextosBtnDB">Lista de exercicios</h2> */}
        <Link to="/LstTreinoAluno" className="btn-cadastro">Lista de Exercicio</Link>

      </div>

       <div className="BotãoDashboard">
        <img src="" alt="" className="LogoExercicioDB"/>
        <h2 className="TextosBtnDB">Historico do aluno</h2>
      </div>

       <div className="BotãoDashboard">
        <img src="" alt="" className="LogoExercicioDB"/>
        <h2 className="TextosBtnDB">Ranking</h2>
      </div>


      {/* Menu inferior */}
      <nav className="footer">
        <button className="FtHome">
          <img src="/icons/home.png" className="LogoFooter" />
        </button>

        <button className="FtTreinos">
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtRanking">
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtProfile">
          <img src="" className="LogoFooter" />
        </button>
      </nav>
    </div>
  );
}
