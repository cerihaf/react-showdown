import React, { useState } from "react";
import VoteButton from "./button";
import NextMatchupBtn from "./NextMatchupBtn";

const VoteBox = ({hasVoted, setHasVoted}) => {

  return (
    <section>
      <div className="bg-charcoal flex justify-between items-center max-w-5xl h-60 mx-auto">
        <VoteButton animal="animal_1" bgcolor="bg-burntsienna" />
          <span className="leading-none text-maizecrayola">OR</span>
        <VoteButton animal="animal_2" bgcolor="bg-persiangreen" />
      </div>
{      hasVoted  &&  (<div className="bg-charcoal flex justify-between items-center w-36 h-24 mx-auto">
        <NextMatchupBtn bgcolor="bg-sandybrown" />
      </div>)
}    </section>
  );
};

export default VoteBox;
