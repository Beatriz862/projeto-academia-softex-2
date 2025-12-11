import "../style/Exercicios.css";


import "../style/Login.css";





interface CardTreinoProps {
  titulo: string;
  serie: string;
  repeticoes: string;
  peso: string;
}

export default function CardsExercicios({ titulo, serie, repeticoes, peso }: CardTreinoProps ) {
  return (
    <div className="CardExercicio">
      <div className="TextoExercicio">
        <h3>{titulo}</h3>
        <p>Séries: {serie}</p>
        <p>Repetições: {repeticoes}</p>
      </div>

      <div className="InfoExercicio">
        {peso}
      </div>
    </div>
  );
}
const CardTreino = ({ titulo, serie, repeticoes, peso }: CardTreinoProps) => {
  return (
    <div className="CardTreino">

      <div className="CardTextos">
        <h3 className="NomeExercicio">{titulo}</h3>
      </div>

      <div>
        <h2 className="Serie">{serie}</h2>

        <div className="Repeticoes">{repeticoes}</div>

        <div className="Peso">{peso}</div>

        <input type="radio" />

      </div>
    </div>
  );
};
