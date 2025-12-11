import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import LstTreinoAluno from "./pages/LstTreinoAluno"; {/* aluno  */}
import DashboardAluno from "./pages/DashboardAluno.tsx"; {/* aluno  */}
import PrescricaoTreino from "./pages/PrescricaoTreino";{/* prof */}
import TiposDeTreino from "./pages/TiposDeTreino"; {/* prof */}
// import Exercicios from "./pages/ExerciciosProf.tsx"; {/* prof */}
import AvaliacaoFisicaProf from "./pages/AvaliacaoFisicaProf.tsx";{/* prof */}

import AvaliacaoFisicaAluno from "./pages/AvaliacaoFisicaAluno.tsx";
import ExerciciosAluno from "./pages/Exercicios.tsx";
import Treinos from "./pages/LstTreinoAluno";
import LoginProfessor from "./pages/LoginProfessor.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* geral */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* aluno  */}
        <Route path="/LstTreinoAluno" element={<Treinos />} />
        <Route path="DashboardAluno" element={<DashboardAluno />} />
        <Route path="/exercicios" element={<ExerciciosAluno />} />
        <Route path="/AvaliacacaoFisicaAluno" element={<AvaliacaoFisicaAluno />} />

        {/* prof */}
        <Route path="/PrescricaoTreino" element={<PrescricaoTreino />} />
        <Route path="/tipos-de-treino/:alunoId" element={<TiposDeTreino />} />
        <Route path="/LoginProfessor" element={<LoginProfessor />} />
        <Route path="/AvaliacaoFisicaProf" element={<AvaliacaoFisicaProf />} />

      </Routes>
    </Router>
  );
}