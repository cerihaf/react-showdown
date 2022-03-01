import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  const red = data?.redVoteCount;
  const blue = data?.blueVoteCount;

  return (
    <div className="bg-charcoal max-w-sm">
      <Pie
        key={data}
        data={{
          labels: [data.animal_1, data.animal_2],
          datasets: [
            {
              label: "# of votes",
              data: [blue, red],
              backgroundColor: ["#E76F51", "#2A9D8F"],
            },
          ],
        }}
      />
    </div>
  );
}
