import React, { useEffect, useState } from "react";
import VoteBox from "../components/Vote";
import PieChart from "../components/Chart";
import Comments from "../components/Comments";
import { GET_MATCHUP } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Home = () => {

  const [hasVoted, setHasVoted] = useState(false);
  const [matchupId, setMatchupId] = useState(1);
  const [voteId, setVoteId] = useState(null);

  const { loading, data, refetch } = useQuery(GET_MATCHUP, {
    variables: { id: matchupId },
  });

  const matchup = data?.getMatchup || {};

  async function handleNextMatchup() {
    if (matchupId === 12) {
      setMatchupId(1);
    } else {
      setMatchupId((prevState) => prevState + 1);
    }
    setHasVoted(false);
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
        <div className="flex flex-row justify-around mobile-s, mobile-m, mobile-l:flex-col">
          <PieChart data={matchup} />
          <Comments matchupId={matchupId} voteId={voteId} />
        </div>
      )}
    </div>
  );
};

export default Home;
