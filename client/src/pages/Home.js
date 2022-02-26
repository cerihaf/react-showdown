import React, { useState } from "react";
import VoteBox from "../components/Vote";

const Home = () => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="container">
      <VoteBox />
    </div>
  );
};

export default Home;
