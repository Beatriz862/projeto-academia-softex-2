import CircularChart from "../components/CircularChart";
import "../style/DashboardAluno.css";

export default function DashboardAluno() {
  return (
    <div className="TelaDashboard">

      <h2 className="TituloDashboard">
        Página Inicial
        <span className="NumeroDashboard">1</span>
      </h2>

export default function DashboardAluno() {
  return (
    <div className="Tela">

        {/* LOGO */}
        <img src="Logo.png" alt="logo" className="LogoTopo" />

        {/* TEXTO CENTRALIZADO */}
        <span className="OlaUsuario">Oi, Gleyde</span>

        {/* BOTÃO MENU */}
        <img src="/menu.png" alt="menu" className="MenuTopo" />

      </header>

      {/* CONTEÚDO */}
      <div className="ConteudoDashboard">

        <div className="GraficoContainer">
          <CircularChart value={65} />
        </div>

        <div className="BotoesContainer">
          <button className="BotaoPrincipal">📝 Lista de Exercício</button>
          <button className="BotaoPrincipal">📚 Histórico do Aluno</button>
          <button className="BotaoPrincipal">🏆 Ranking</button>
        </div>

      </div>

      {/* RODAPÉ */}
      <nav className="MenuInferior">
        <button className="BotaoPrincipal">📝 </button>
        <button className="BotaoPrincipal">📚 </button>
        <button className="BotaoPrincipal">🧭</button>
        <button className="BotaoPrincipal">🏆 </button>
        <button className="BotaoPrincipal">👤 </button>
      </nav>

    </div>
  );
}
