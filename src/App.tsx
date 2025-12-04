import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LstTreinoAluno from "./pages/LstTreinoAluno"
import DashboardAluno from "./pages/DashboardAluno.tsx"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LstTreinoAluno" element={<LstTreinoAluno />} />
        <Route path="DashboardAluno" element={<DashboardAluno />} />

       

      </Routes>
    </Router>
  );
}