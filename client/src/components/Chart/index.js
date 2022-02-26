import React from "react";
import { useQuery } from "@apollo/client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GET_MATCHUP } from "../../utils/queries";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  return (
    <div className="bg-charcoal">
      <h1>Vote Count</h1>
      <Pie
        data={{
          labels: ["Red", "Blue"],
          datasets: [
            {
              label: "# of votes",
              data: [5, 10],
              backgroundColor: ["red", "blue"],
            },
          ],
        }}
      />
    </div>
  );
}
