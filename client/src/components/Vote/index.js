import React, { useState } from "react";
import VoteButton from "./button";

const VoteBox = () => {

    const [hasVoted, setHasVoted] = useState(false)


  return (
    <div className="bg-charcoal flex justify-between items-center max-w-5xl h-60 mx-auto">
      <VoteButton animal="animal 1" bgcolor="bg-burntsienna" />
        <span className="leading-none text-maizecrayola">OR</span>
      <VoteButton animal="animal 2" bgcolor="bg-persiangreen" />
    </div>
  );
};

export default VoteBox;
