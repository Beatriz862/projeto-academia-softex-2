import "../style/Login.css";
import { Menu, User } from "lucide-react";
import CardsExercicios from "../components/CardsExercicios";
import "../style/Exercicios.css";

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

      {/* Lista de Treinos */}
      <div className="ListaDeExercicios">
        <CardsExercicios
          titulo="Supino Reto"
          serie="10x12"
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
          <img src="/icons/treinos.png" className="LogoFooter" />
        </button>

        <button className="FtRanking">
          <img src="/icons/ranking.png" className="LogoFooter" />
        </button>

        <button className="FtProfile">
          <img src="/icons/user.png" className="LogoFooter" />
        </button>
      </nav>
    </div>
  );
}
