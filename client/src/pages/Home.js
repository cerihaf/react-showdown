import React, { useState } from "react";
import VoteBox from "../components/Vote";

const Home = () => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="container">
      <VoteBox setHasVoted={setHasVoted} hasVoted={hasVoted} />
      {hasVoted && <h1>Render comments/chart here</h1>}
    </div>
  );
};

export default Home;
