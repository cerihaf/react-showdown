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
          labels: [data.animal_1, data.animal_2],
          datasets: [
            {
              label: "# of votes",
              data: [red, blue],
              backgroundColor: ["#E76F51", "#2A9D8F"],
            },
          ],
        }}
      />
    </div>
  );
}
