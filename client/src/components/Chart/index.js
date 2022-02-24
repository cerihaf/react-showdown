import React from "react";
import { Pie } from "react-chartjs-2";

export default function Chart() {
  return (
    <div>
      <h1>Vote Count</h1>
      <Pie
        data={{
          labels: ["Red", "Blue"],
          datasets: [
            {
              data: [20, 20],
              backgroundColor: ["red", "blue"],
            },
          ],
        }}
      />
    </div>
  );
}
