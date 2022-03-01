import React, { useEffect, useState } from "react";
import VoteBox from "../components/Vote";
import PieChart from "../components/Chart";
import Comments from "../components/Comments";
import { GET_MATCHUP } from "../utils/queries";
import { useQuery } from "@apollo/client";
import AuthService from "../utils/auth";

const Home = () => {
  if (!AuthService.loggedIn()) {
    window.location.assign("/login");
  }

  const [hasVoted, setHasVoted] = useState(false);
  const [matchupId, setMatchupId] = useState(1);
  const [voteId, setVoteId] = useState(null);

  const { loading, data, refetch } = useQuery(GET_MATCHUP, {
    variables: { id: matchupId },
  });

  const matchup = data?.getMatchup || {};

  function handleNextMatchup() {
    let seenList = JSON.parse(localStorage.getItem("seenMatchups"));
    if (!seenList) seenList = {};
    seenList[matchupId] = true; //add the current matchup to the list of seen ones
    localStorage.setItem("seenMatchups",JSON.stringify(seenList)); //save it
    let target = -1; //default
    for (let i = 1; i < 13; i++){
      if (seenList[i] === undefined){ //undefined == haven't seen
          target = i; //first matchup in the list you haven't seen
          break;
      }
    }
    if (target === -1){ //if you've seen all the matchups
      if (matchupId === 12) setMatchupId(1);
      else setMatchupId((prevState) => prevState + 1);
      setHasVoted(true);
    }
    else{
      setMatchupId(target);
      setHasVoted(false); //should be modular; users shouldn't have hasVoted=false for things they've already voted for
    }
    //still need to save hasVoted to DB
  }

  useEffect(() => {
    refetch();
  }, [hasVoted]);

  useEffect(() => {
    if (matchup.hasVoted) {
      setHasVoted(true);
    }
  }, [matchup.hasVoted]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container max-w-5xl">
      <h1 className="text-center font-brand font-normal text-6xl py-12 text-antiquewhite">
        WHO WOULD WIN IN A FIGHT?
      </h1>
      <VoteBox
        matchup={matchup}
        handleNextMatchup={handleNextMatchup}
        setHasVoted={setHasVoted}
        hasVoted={hasVoted}
        setVoteId={setVoteId}
        matchupId={matchupId}
      />
      {hasVoted && (
        <div className="flex flex-row justify-around">
          <PieChart data={matchup} />
          <Comments matchupId={matchupId} voteId={voteId} />
        </div>
      )}
    </div>
  );
};

export default Home;
