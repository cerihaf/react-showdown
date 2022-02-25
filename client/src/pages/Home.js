import React, { useState } from "react";
import VoteBox from "../components/Vote";

const Home = () => {
  
  const [hasVoted, setHasVoted] = useState(false)


  return (
    <div className="container bg-persiangreen">
      <h1 className="underline">Hello World</h1>
      <VoteBox/>
    </div>
  );
};

export default Home;
