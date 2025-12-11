import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Menu, User } from "lucide-react";

//TIPAGEM DOS DIAS
type DiaSemana =
  | "domingo"
  | "segunda"
  | "terça"
  | "quarta"
  | "quinta"
  | "sexta"
  | "sábado";

const mapDias: DiaSemana[] = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];

export default function WorkoutChart() {
  const [trainDays, setTrainDays] = useState<Date[]>([]);

  const registerToday = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // evita duplicar por horário
    
    // impede registrar duas vezes no mesmo dia
    const jaRegistrado = trainDays.some((d) => d.getTime() === hoje.getTime());
    if (!jaRegistrado) {
      setTrainDays((prev) => [...prev, hoje]);
    }
  };

  const getWeekday = (date: Date) => date.getDay();

  const weeklyCounts: Record<DiaSemana, number> = {
    domingo: 0,
    segunda: 0,
    terça: 0,
    quarta: 0,
    quinta: 0,
    sexta: 0,
    sábado: 0,
  };

  const now = new Date();
  const firstDayOfWeek = new Date(now);
  firstDayOfWeek.setDate(now.getDate() - now.getDay());

  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  const currentWeekTrainDays = trainDays.filter((day) => {
    return day >= firstDayOfWeek && day <= lastDayOfWeek;
  });

  //LOOP
  currentWeekTrainDays.forEach((day) => {
    const weekdayIndex = getWeekday(day);
    const key = mapDias[weekdayIndex];
    weeklyCounts[key]++;
  });

  const chartData = [
    { dia: "Dom", valor: weeklyCounts.domingo },
    { dia: "Seg", valor: weeklyCounts.segunda },
    { dia: "Ter", valor: weeklyCounts.terça },
    { dia: "Qua", valor: weeklyCounts.quarta },
    { dia: "Qui", valor: weeklyCounts.quinta },
    { dia: "Sex", valor: weeklyCounts.sexta },
    { dia: "Sáb", valor: weeklyCounts.sábado },
  ];

  const totalHistorico = trainDays.length;

  
  // CALCULO DE DIAS CONSECUTIVOS
 

  const sortedDays = [...trainDays].sort(
    (a, b) => a.getTime() - b.getTime()
  );

  let currentStreak = 0;
  let bestStreak = 0;

  for (let i = 0; i < sortedDays.length; i++) {
    if (i === 0) {
      currentStreak = 1;
      bestStreak = 1;
    } else {
      const diff =
        (sortedDays[i].getTime() - sortedDays[i - 1].getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff === 1) {
        currentStreak++;
      } else if (diff > 1) {
        currentStreak = 1;
      }

      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
      }
    }
  }


  return (
    <div className="Tela">
      {/* Topo */}
      <header className="Header">
        <div className="HeaderPag">
          <User size={26} />
          <span>Olá, Jorge</span>
        </div>
        <Menu size={28} />
      </header>

      {/* Titulo */}
      <h2 className="TituloPag">Forma Fitness</h2>

      <div style={{ padding: 20 }}>
        <h2>Gráfico de Treinos na Semana</h2>

        <button onClick={registerToday} style={{ padding: 10, marginBottom: 20 }}>
          Registrar treino hoje
        </button>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="valor" fill="#4F46E5" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* EXIBIÇÃO DOS CONTADORES */}
        <div style={{ marginTop: 20 }}>
          <p>Total de treinos no histórico:</p>
          <h2>{totalHistorico}</h2>

          <p>🔥 Dias consecutivos de treino:</p>
          <h2>{currentStreak}</h2>

          <p>🏆 Melhor sequência (recorde):</p>
          <h2>{bestStreak}</h2>
        </div>
      </div>

      {/* Menu inferior */}
      <nav className="footer">
        
        <button className="FtHome" onClick={() => window.location.href = "/DashboardAluno"}>
          <img src="/icons/home.png" className="LogoFooter" />
        </button>
        
        <button className="FtTreinos" onClick={() => window.location.href = "/LstTreinoAluno"}>
          <img src="" className="LogoFooter" />
        </button>
  
        <button className="FtRanking" onClick={() => window.location.href = ""}> {/*link da gameficacao*/}
          <img src="" className="LogoFooter" />
        </button>

        <button className="FtAvaliacao" onClick={() => window.location.href = "/AvalicacaoFisicaAluno"}>
          <img src="" className="LogoFooter" />
        </button>
      </nav>
    </div>
  );
}
