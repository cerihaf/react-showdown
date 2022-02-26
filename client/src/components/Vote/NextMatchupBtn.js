import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_MATCHUP } from "../../utils/queries";

const NextMatchupBtn = () => {
    const [hasVoted, setHasVoted] = useState(false)
    const getMatchup = useQuery(GET_MATCHUP);


    function nextMatch(event) {
        event.preventDefault();

        if(hasVoted) {
            // if user has voted, render comments
            return VoteBox;
        } else {
            // if user has not voted, display the next matchup

        }

    }

    return(
        <div className="bg-maizecrayola hover:bg-sandybrown hover:text-maizecrayola text-zinc-600 flex-1 flex justify-center border-solid border-2 border-HeliotropeGray text-lg rounded-md">
            <button onClick={nextMatch} className="font-semibold"><p className="">Next Match</p></button>
        </div>
    )
}

export default NextMatchupBtn;