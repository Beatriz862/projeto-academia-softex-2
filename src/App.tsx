import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LstTreinoAluno from "./pages/LstTreinoAluno"
import DashboardAluno from "./pages/DashboardAluno.tsx"
import PrescricaoTreino from "./pages/PrescricaoTreino";
import TiposDeTreino from "./pages/TiposDeTreino";
import Exercicios from "./pages/ExerciciosProf.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LstTreinoAluno" element={<LstTreinoAluno />} />
        <Route path="DashboardAluno" element={<DashboardAluno />} />
        <Route path="/PrescricaoTreino" element={<PrescricaoTreino />} />
        <Route path="/tipos-de-treino/:alunoId" element={<TiposDeTreino />} />
        <Route path="/exercicios/:treinoId" element={<Exercicios />} />

      </Routes>
    </Router>
  );
}