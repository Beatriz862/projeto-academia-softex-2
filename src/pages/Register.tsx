import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    confirmacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmacao) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Cadastro enviado:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label>CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />

          <label>Confirmação de Senha</label>
          <input
            type="password"
            name="confirmacao"
            value={formData.confirmacao}
            onChange={handleChange}
            required
          />

          <div className="button-container">
            <button type="submit" className="btn-cadastrar">
              Cadastrar
            </button>
          </div>
        </form>

        <p>
          Já tem conta? <Link to="/login">Fazer login</Link>
        </p>
      </div>
    </div>
  );
}
