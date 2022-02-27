import React from "react";

const VoteButton = ({ animal, bgcolor, setHasVoted }) => {
  const classnames = `h-60 w-96 border-solid border-2 border-HeliotropeGray ${bgcolor} text-4xl font-brand text-zinc-700 rounded-3xl`;

  return (
    <div className="bg-charcoal flex-1 flex justify-center">
      <button onClick={() => setHasVoted(true)} className={classnames}>
        {animal}
      </button>
    </div>
  );
};

export default VoteButton;
