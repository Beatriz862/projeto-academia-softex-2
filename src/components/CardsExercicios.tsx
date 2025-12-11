import "../style/Exercicios.css";

interface Props {
  titulo: string;
  serie: string;
  repeticoes: string;
  peso: string;
}

export default function CardsExercicios({ titulo, serie, repeticoes, peso }: Props) {
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
