import "../style/Login.css";
import { Menu, User } from "lucide-react";
import CardsExercicios from "../components/CardsExercicios";
import { useNavigate } from "react-router-dom";





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


    {/* Relodio */}


      {/* Lista de treinos */}
      <div className="ListaDeExercicios">

        <CardsExercicios
        titulo="Supino Reto"
        serie={"10x12"}
        repeticoes="3"
        peso="23"
          
        />
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
