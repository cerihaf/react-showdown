import React from "react";
import { ADD_VOTE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";


const VoteButton = ({ animal, bgcolor, setHasVoted, setVoteId, _id, hasVoted, matchupId }) => {
  const classnames = `h-60 w-96 border-solid border-2 border-HeliotropeGray ${bgcolor} text-4xl font-brand text-zinc-700 rounded-3xl`;
  const [vote] = useMutation(ADD_VOTE);


  async function handleClick() {
    if(!hasVoted){
    setHasVoted(true)
    setVoteId(_id)
    try {
      await vote({
        variables: { vote: +_id, matchup_id: +matchupId },
      });

    } catch (e) {
      console.error(e);
    }
    }
    
  }
  return (
    <div className="bg-charcoal flex-1 flex justify-center">
      <button onClick={handleClick} className={classnames}>
        {animal}
      </button>
    </div>
  );
};

export default VoteButton;
