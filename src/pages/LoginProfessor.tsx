import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
import logo from "../assets/logo.png"; 



export default function Login() {
  const [CREF, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { CREF, password });
    alert("Login efetuado!");
  }
  

  ;

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Ícone ou logo */}
        <img
          src={logo} 
          alt="Logo"
          className="login-logo"
        />
        <h2>Professor</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Login</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu CREF"
            value={CREF}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Link to="/PrescricaoTreino" className="btn-cadastro">Login</Link>
          <Link to="" >Esqueceu a senha?</Link>
          <button onClick={() => window.location.href = "/Login"} >Professor</button>
        </form>
      </div>
    </div>
  );
}
