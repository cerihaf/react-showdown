import React, { useState } from "react";
import VoteButton from "./button";

const VoteBox = () => {

    const [hasVoted, setHasVoted] = useState(false)


  return (
    <div className="bg-persiangreen flex">
      <VoteButton animal="animal 1" bgcolor="bg-orange-200" />
      <VoteButton animal="animal 2" bgcolor="bg-rose-400" />
    </div>
  );
};

export default VoteBox;
