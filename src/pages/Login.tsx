import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
import logo from "../assets/logo.png"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    alert("Login efetuado!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Ícone ou logo */}
        <img
          src={logo} 
          alt="Logo"
          className="login-logo"
        />

        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Login</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
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

          <button type="submit" className="btn-login">Login</button>
          <Link to="/register" className="btn-cadastro">Cadastro</Link>
        </form>
      </div>
    </div>
  );
}
