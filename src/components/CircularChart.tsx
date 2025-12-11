import { useEffect, useState } from "react";
import "../style/CircularChart.css";

interface CircularChartProps {
  value?: number;
}

export default function CircularChart({ value = 75 }: CircularChartProps) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Estado para animação suave
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const finalOffset = circumference - (value / 100) * circumference;
    setTimeout(() => {
      setOffset(finalOffset);
    }, 200); // atraso para animação suave
  }, [value]);

  return (
    <div className="ChartContainer">
      <svg width="150" height="150" className="GraficoCircular">
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#40495a"
          strokeWidth="12"
          fill="none"
        />

        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#A7E800"
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.4s ease-in-out" }}
        />

        <text
          x="75"
          y="82"
          textAnchor="middle"
          fontSize="22"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
}
