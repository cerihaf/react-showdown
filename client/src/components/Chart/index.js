import React from "react";
import { useQuery } from "@apollo/client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GET_MATCHUP } from "../../utils/queries";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({data}) {

  const red = data?.redVoteCount;
  const blue = data?.blueVoteCount;

  return (
    <div className="bg-charcoal max-w-sm">
      <Pie
        data={{
          labels: [],
          datasets: [
            {
              label: "# of votes",
              data: [blue, red],
              backgroundColor: ["#2A9D8F", "#E76F51"],
            },
          ],
        }}
      />
    </div>
  );
}
