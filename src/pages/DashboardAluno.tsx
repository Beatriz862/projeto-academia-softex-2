import { Menu, User } from "lucide-react";
import CircularChart from "../components/CircularChart";
import "../style/DashboardAluno.css";

export default function DashboardAluno() {
  return (
    <div className="TelaDashboard">

      {/* CABEÇALHO PADRÃO */}
      <header className="Header">
        <div className="HeaderPag">
          <User size={26} />
          <span>Olá, Gleyde</span>
        </div>
        <Menu size={28} />
      </header>

      {/* TÍTULO */}
      <h2 className="TituloDashboard">Página Inicial</h2>

      {/* CONTEÚDO */}
      <div className="ConteudoDashboard">

        <div className="GraficoContainer">
          <CircularChart value={65} />
        </div>

        <div className="BotoesContainer">
          <button
            className="BotaoPrincipal"
            onClick={() => (window.location.href = "/LstTreinoAluno")}
          >
            📝 Lista de Exercício
          </button>

          <button
            className="BotaoPrincipal"
            onClick={() => (window.location.href = "/AvaliacacaoFisicaAluno")}
          >
            📚 Histórico do Aluno
          </button>

          <button className="BotaoPrincipal">
            🏆 Ranking
          </button>
        </div>

      </div>

      {/* MENU INFERIOR */}
      <nav className="MenuInferior">
        <button
          className="BotaoPrincipal"
          onClick={() => (window.location.href = "/LstTreinoAluno")}
        >
          📝
        </button>

        <button
          className="BotaoPrincipal"
          onClick={() => (window.location.href = "/AvaliacacaoFisicaAluno")}
        >
          📚
        </button>

        <button
          className="BotaoPrincipal"
          onClick={() => (window.location.href = "/DashboardAluno")}
        >
          🧭
        </button>

        <button className="BotaoPrincipal">🏆</button>
        <button className="BotaoPrincipal">👤</button>
      </nav>

    </div>
  );
}
