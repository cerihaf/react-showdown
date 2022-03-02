import React from "react";
import { useQuery } from "@apollo/client";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GET_MATCHUP } from "../../utils/queries";

ChartJS.register(ArcElement);

export default function PieChart({ data }) {
  const red = data?.redVoteCount;
  const blue = data?.blueVoteCount;

  return (
    <div className="bg-charcoal max-w-sm ml-auto mr-auto lg:">
      <Pie
        key={data}
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
