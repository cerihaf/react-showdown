import React, { useState } from "react";
import VoteButton from "./button";
import { useQuery } from "@apollo/client";
import { GET_MATCHUP } from "../../utils/queries";

const VoteBox = () => {
  //const [hasVoted, setHasVoted] = useState(false);
  const [prevMatchups, setPrevMatchups] = useState([])

  const { loading, data } = useQuery(GET_MATCHUP, {
    variables: { id: 1 },
  });

  const matchup = data?.getMatchup || {};


  if (loading) {
    return <div>Loading...</div>;
  } else {
    
  }



  return (
    <div className="bg-charcoal flex justify-between items-center max-w-5xl h-60 mx-auto">
      <VoteButton animal={matchup.animal_1} bgcolor="bg-burntsienna" />
      <span className="leading-none text-maizecrayola">OR</span>
      <VoteButton animal={matchup.animal_2} bgcolor="bg-persiangreen" />
    </div>
  );
};

export default VoteBox;
