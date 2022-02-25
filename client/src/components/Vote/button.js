import React from "react";

const VoteButton = ({animal, bgcolor}) => {

    const classnames = `w-44 border-solid border-2 border-amber-800 ${bgcolor} h-96 text-4xl rounded-3xl`


    return(
        <div className="bg-persiangreen">
            <button className={classnames}>
                {animal}
            </button>
        </div>
    )
}

export default VoteButton;