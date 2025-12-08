import { useState } from "react";
import { Link } from "react-router-dom";

export default function PrescricaoTreino() {
  const alunos = [
    { id: 1, nome: "Roberto Carlos" },
    { id: 2, nome: "Ana Pereira" },
  ];

  const [alunoSelecionado, setAlunoSelecionado] = useState(1);

  const dadosAluno = {
    sexo: "M",
    idade: 30,
    peso: 89,
    altura: 1.87,
    ultimaAvaliacao: "12/08/25",
    proximaAvaliacao: "12/02/25",
    observacao: "Aluno com problemas articulares no joelho",
  };

  const treinos = [
    { id: 1, nome: "Peito e Bíceps" },
    { id: 2, nome: "Glúteo" },
    { id: 3, nome: "Quadríceps" },
    { id: 4, nome: "Costas e Bíceps" },
  ];

  return (
    <div>

      {/* Seleção do Aluno */}
      <h2>Aluno:</h2>
      <select
        value={alunoSelecionado}
        onChange={(e) => setAlunoSelecionado(Number(e.target.value))}
      >
        {alunos.map((aluno) => (
          <option key={aluno.id} value={aluno.id}>
            {aluno.nome}
          </option>
        ))}
      </select>

      <button>Salvar</button>

      {/* Card com informações do aluno */}
      <div>
        <p>Sexo: {dadosAluno.sexo}</p>
        <p>Idade: {dadosAluno.idade}</p>
        <p>Peso: {dadosAluno.peso}</p>
        <p>Estatura: {dadosAluno.altura}</p>

        <p>Última avaliação: {dadosAluno.ultimaAvaliacao}</p>
        <p>Próxima avaliação: {dadosAluno.proximaAvaliacao}</p>

        <p>Observações: {dadosAluno.observacao}</p>
      </div>

      {/* Lista de Treinos */}
      <h3>Lista de Treinos</h3>

      {/* Botão que EDITA os tipos de treino */}
      <Link to={`/tipos-de-treino/${alunoSelecionado}`}>
        <button>Editar</button>
      </Link>

      {/* Cards */}
      {treinos.map((treino) => (
        <div key={treino.id}>
          <h4>{treino.nome}</h4>

          <Link to={`/exercicios/${treino.id}`}>
            <button>Editar</button>
          </Link>
        </div>
      ))}


       {/* Menu inferior */}
      <nav className="footer">
        <button className="FtHome">
          <img src="/icons/home.png" className="LogoFooter" />
        </button>

        <button className="FtTreinos">
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtRanking">
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtProfile">
          <img src="" className="LogoFooter" />
        </button>
      </nav>

    </div>
  );
}
