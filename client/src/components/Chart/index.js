import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  return (
    <div>
      <h1>Vote Count</h1>
      <Pie
        data={{
          labels: ["Red", "Blue"],
          datasets: [
            {
              label: "# of votes",
              data: [5, 20],
              backgroundColor: ["red", "blue"],
            },
          ],
        }}
      />
    </div>
  );
}
