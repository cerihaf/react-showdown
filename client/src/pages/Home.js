import React, { useState } from "react";
import VoteBox from "../components/Vote";
import PieChart from "../components/Chart";
import Comments from "../components/Comments";
import { GET_MATCHUP } from "../utils/queries";
import { useQuery } from "@apollo/client";
import AuthService from "../utils/auth";

const Home = () => {
  if (!AuthService.loggedIn()) {
    window.location.assign('/login');
  }

  const [hasVoted, setHasVoted] = useState(false);
  const [matchupId, setMatchupId] = useState(1);

  const { loading, data } = useQuery(GET_MATCHUP, {
    variables: { id: matchupId },
  });

  const matchup = data?.getMatchup || {};

  function handleNextMatchup() {
    if (matchupId === 13) {
      setMatchupId(1);
    } else {
      setMatchupId((prevState) => prevState + 1);
    }
    setHasVoted(false);
    //still need to save hasVoted to DB
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);

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
      />
      {hasVoted && (
        <div className="flex flex-row justify-around">
          <PieChart data={matchup} />
          <Comments matchupId={matchupId} />
        </div>
      )}
    </div>
  );
};

export default Home;
