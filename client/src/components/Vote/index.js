import React, { useEffect, useState } from "react";
import VoteButton from "./button";
import { useQuery } from "@apollo/client";
import { GET_MATCHUP } from "../../utils/queries";
import NextMatchupBtn from "./NextMatchupBtn";



const VoteBox = ({hasVoted, setHasVoted}) => {
  const [matchupId, setMatchupId] = useState(1)
  const { loading, data } = useQuery(GET_MATCHUP, {
  variables: { id: matchupId },
  });

  const matchup = data?.getMatchup || {};

  function handleNextMatchup() {
    if (matchupId === 13 ) {
      setMatchupId(1)
    } else {
      setMatchupId((prevState) => prevState + 1 )
    }
    setHasVoted(false)
    //still need to save hasVoted to DB
  }

if (loading) {
  return <div>Loading...</div>;
} 

  return (
    <section>
      <div className="bg-charcoal flex justify-between items-center max-w-5xl h-60 mx-auto">
        <VoteButton animal={matchup.animal_1} bgcolor="bg-burntsienna" setHasVoted={setHasVoted} />
        <span className="leading-none text-maizecrayola">OR</span>
        <VoteButton animal={matchup.animal_2} bgcolor="bg-persiangreen" setHasVoted={setHasVoted} /> 
        </div>
      {  hasVoted  &&  (<div className="bg-charcoal flex justify-between items-center w-36 h-24 mx-auto">
      <NextMatchupBtn handleNextMatchup={handleNextMatchup} />
      </div>)} 
      
  </section>

  );
};

export default VoteBox;
