import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";

export default function AvaliacaoFisicaProf() {
  const alunos = [
    { id: 1, nome: "Roberto Carlos" },
    { id: 2, nome: "Fernanda Dias" },
  ];

  const [alunoSelecionado, setAlunoSelecionado] = useState(1);

  // DADOS FIXOS 
  const dadosBasicos = {
    sexo: "M",
    idade: 30,
    peso: 89,
    altura: 1.87,
    gorduraAtual: "--",
    gorduraIdeal: "--",
  };

  const perimetros = {
    torax: "--",
    cintura: "--",
    abdomen: "--",
    quadril: "--",
    bracoDir: "--",
    bracoEsq: "--",
    coxaDir: "--",
    coxaEsq: "--",
    panturrilhaDir: "--",
    panturrilhaEsq: "--",
  };

  const dobrasCutaneas = {
    torax: "--",
    abdomen: "--",
    coxa: "--",
    triceps: "--",
    supraIliaca: "--",
    axilar: "--",
    subescapular: "--",
  };

  const bioimpedancia = {
    peso: "--",
    estatura: "--",
    resistencia: "--",
    reactancia: "--",
    gorduraDiagnostico: "--",
    pesoMagra: "--",
    massaOssea: "--",
    pesoDesejado: "--",
    gorduraAtual: "--",
    valorCalorico: "--",
    metabolismoBasal: "--",
    valorSugerido: "--",
  };

  return (
    <div>

       {/* Topo */}
        <header className="Header">
            <div className="HeaderPag">
            <User size={26} />
            <span>Olá, Jorge</span>
            </div>
            <Menu size={28} />
        </header>

      {/* Titulo */}
      <h2 className="TituloPag">
        Avaliação Fisica
      </h2>
        

    

      {/* Seleção do aluno */}
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

      <h1>Avaliação Física</h1>

      {/* DADOS BÁSICOS */}
      <div>
        <h3>Dados Básicos</h3>

        <p>Sexo: {dadosBasicos.sexo}</p>
        <p>Idade: {dadosBasicos.idade}</p>
        <p>Peso: {dadosBasicos.peso}</p>
        <p>Altura: {dadosBasicos.altura}</p>

        <p>Gordura atual: {dadosBasicos.gorduraAtual}</p>
        <p>Gordura ideal: {dadosBasicos.gorduraIdeal}</p>

        <Link to="/editar-dados-basicos">
          <button>Editar</button>
        </Link>
      </div>

      {/* PERÍMETROS */}
      <div>
        <h3>Perímetros (cm)</h3>

        <p>Tórax: {perimetros.torax}</p>
        <p>Cintura: {perimetros.cintura}</p>
        <p>Abdomen: {perimetros.abdomen}</p>
        <p>Quadril: {perimetros.quadril}</p>

        <p>Braço Dir: {perimetros.bracoDir}</p>
        <p>Braço Esq: {perimetros.bracoEsq}</p>

        <p>Coxa Dir: {perimetros.coxaDir}</p>
        <p>Coxa Esq: {perimetros.coxaEsq}</p>

        <p>Panturrilha Dir: {perimetros.panturrilhaDir}</p>
        <p>Panturrilha Esq: {perimetros.panturrilhaEsq}</p>

        <Link to="/editar-perimetros">
          <button>Editar</button>
        </Link>
      </div>

      {/* DOBRAS CUTÂNEAS */}
      <div>
        <h3>Dobras Cutâneas</h3>

        <h4>Masculino</h4>
        <p>Tórax: {dobrasCutaneas.torax}</p>
        <p>Abdomen: {dobrasCutaneas.abdomen}</p>
        <p>Coxa: {dobrasCutaneas.coxa}</p>

        <h4>Feminino</h4>
        <p>Tríceps: {dobrasCutaneas.triceps}</p>
        <p>Supra-ilíaca: {dobrasCutaneas.supraIliaca}</p>
        <p>Axilar: {dobrasCutaneas.axilar}</p>
        <p>Subescapular: {dobrasCutaneas.subescapular}</p>

        <Link to="/editar-dobras">
          <button>Editar</button>
        </Link>
      </div>

      {/* BIOIMPEDÂNCIA */}
      <div>
        <h3>Bioimpedância</h3>

        <p>Peso: {bioimpedancia.peso}</p>
        <p>Estatura: {bioimpedancia.estatura}</p>
        <p>Resistência: {bioimpedancia.resistencia}</p>
        <p>Reactância: {bioimpedancia.reactancia}</p>

        <p>Gordura Diagnóstico: {bioimpedancia.gorduraDiagnostico}</p>
        <p>Peso Magro: {bioimpedancia.pesoMagra}</p>
        <p>Massa Óssea: {bioimpedancia.massaOssea}</p>

        <p>Peso Desejado: {bioimpedancia.pesoDesejado}</p>
        <p>% Gordura Atual: {bioimpedancia.gorduraAtual}</p>

        <p>Valor Calórico Atual: {bioimpedancia.valorCalorico}</p>
        <p>Metabolismo Basal: {bioimpedancia.metabolismoBasal}</p>

        <p>Valor Sugerido de Calorias: {bioimpedancia.valorSugerido}</p>

        <Link to="/editar-bioimpedancia">
          <button>Editar</button>
        </Link>
      </div>


        {/* RODAPÉ */}
      <nav className="MenuInferior">
        <button className="BotaoPrincipal" onClick={() => window.location.href = ""} >📝 </button>
        <button className="BotaoPrincipal" onClick={() => window.location.href = "/AvalicacaoFisicaAluno"}>📚 </button>
        <button className="BotaoPrincipal" onClick={() => window.location.href = ""}>🧭</button>
        <button className="BotaoPrincipal">🏆 </button>
        <button className="BotaoPrincipal">👤 </button>
      </nav>
    </div>
  );
}
