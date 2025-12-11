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
