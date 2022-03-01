import React from "react";
import VoteButton from "./button";
import NextMatchupBtn from "./NextMatchupBtn";



const VoteBox = ({ hasVoted, setHasVoted, matchup, handleNextMatchup, setVoteId, matchupId }) => {
  return (
    <section>
      <div className="bg-charcoal flex justify-between items-center max-w-5xl h-60 mx-auto">
        <VoteButton
          animal={matchup.animal_1}
          bgcolor="bg-burntsienna"
          hasVoted={hasVoted}
          setHasVoted={setHasVoted}
          setVoteId={setVoteId}
          _id="1"
          matchupId={matchupId}
        />
        <span className="leading-none text-maizecrayola font-brand px-12 text-3xl">
          OR
        </span>
        <VoteButton
          animal={matchup.animal_2}
          bgcolor="bg-persiangreen"
          hasVoted={hasVoted}
          setHasVoted={setHasVoted}
          setVoteId={setVoteId}
          _id="2"
          matchupId={matchupId}
        />
      </div>
      {hasVoted && (
        <div className="bg-charcoal flex justify-between items-center w-36 h-24 mx-auto">
          <NextMatchupBtn handleNextMatchup={handleNextMatchup} />
        </div>
      )}
    </section>
  );
};

export default VoteBox;
