import React, { useState } from "react";
import VoteBox from "../components/Vote";
import PieChart from "../components/Chart";
import { GET_MATCHUP } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
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
  console.log(data)

  return (
    <div>
      <h1 className="text-center font-brand font-normal text-4xl py-12 text-antiquewhite">WHO WOULD WIN IN A FIGHT?</h1>
      <div className="container">
        <VoteBox
          matchup={matchup}
          handleNextMatchup={handleNextMatchup}
          setHasVoted={setHasVoted}
          hasVoted={hasVoted}
        />
        {hasVoted && <PieChart data={matchup} />}
      </div>
    </div>
  );
};

export default Home;
