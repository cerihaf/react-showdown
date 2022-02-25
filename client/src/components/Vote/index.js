import React, { useState } from "react";
import VoteButton from "./button";

const VoteBox = () => {

    const [hasVoted, setHasVoted] = useState(false)


  return (
    <div className="bg-charcoal flex">
      <VoteButton animal="animal 1" bgcolor="bg-burntsienna" />
      <VoteButton animal="animal 2" bgcolor="bg-persiangreen" />
    </div>
  );
};

export default VoteBox;
