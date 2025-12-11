import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LstTreinoAluno from "./pages/LstTreinoAluno"; {/* aluno  */}
import DashboardAluno from "./pages/DashboardAluno.tsx"; {/* aluno  */}
import PrescricaoTreino from "./pages/PrescricaoTreino";{/* prof */}
import TiposDeTreino from "./pages/TiposDeTreino"; {/* prof */}
import Exercicios from "./pages/ExerciciosProf.tsx"; {/* prof */}
import AvaliacaoFisicaProf from "./pages/AvaliacaoFisicaProf.tsx";{/* prof */}

import AvalicaoFisicaAluno from "./pages/AvalicacaoFisicaAluno.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* geral */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* aluno  */}
        <Route path="/LstTreinoAluno" element={<LstTreinoAluno />} />
        <Route path="DashboardAluno" element={<DashboardAluno />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/AvalicacaoFisicaAluno" element={<Exercicios />} />

        {/* prof */}
        <Route path="/PrescricaoTreino" element={<PrescricaoTreino />} />
        <Route path="/tipos-de-treino/:alunoId" element={<TiposDeTreino />} />
        
        <Route path="/AvaliacaoFisicaProf" element={<AvaliacaoFisicaProf />} />

      </Routes>
    </Router>
  );
}