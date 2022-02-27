import React, { useState } from "react";
import VoteBox from "../components/Vote";
import PieChart from "../components/Chart";

const Home = () => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="container">
      <VoteBox setHasVoted={setHasVoted} hasVoted={hasVoted} />
      {hasVoted && <PieChart />}
    </div>
  );
};

export default Home;
