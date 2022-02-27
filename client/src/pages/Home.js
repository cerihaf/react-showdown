import React, { useState } from "react";
import VoteBox from "../components/Vote";
import PieChart from "../components/Chart";

const Home = () => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="container">
      <h1 className="underline">Hello World</h1>
      <VoteBox setHasVoted={setHasVoted} hasVoted={hasVoted} />
      {hasVoted && <PieChart />}
    </div>
  );
};

export default Home;
