import React from "react";

function NextMatchupBtn({handleNextMatchup}) {
  
    return(
        <div className="bg-maizecrayola hover:bg-sandybrown hover:text-maizecrayola text-zinc-600 flex-1 flex justify-center border-solid border-2 border-HeliotropeGray text-lg rounded-md">
            <button onClick={handleNextMatchup} className="font-semibold" ><p className="">Next Match</p></button>
        </div>
    )
}

export default NextMatchupBtn;