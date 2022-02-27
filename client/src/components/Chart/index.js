import React from "react";
import { useQuery } from "@apollo/client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GET_MATCHUP } from "../../utils/queries";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const { data } = useQuery(GET_MATCHUP);
  const red = data?.redVoteCount;
  const blue = data?.blueVoteCount;

  return (
    <div className="bg-charcoal">
      <Pie
        data={{
          labels: ["Animal 1", "Animal 2"],
          datasets: [
            {
              label: "# of votes",
              data: [blue, red],
              backgroundColor: ["#E76F51", "#2A9D8F"],
            },
          ],
        }}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
}
