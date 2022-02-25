import React from "react";

const VoteButton = ({animal, bgcolor}) => {

    const classnames = `w-10/12 p-6 h-60 border-solid border-2 border-amber-800 ${bgcolor} text-4xl rounded-3xl`


    return(
        <div className="bg-charcoal flex-1">
            <button className={classnames}>
                {animal}
            </button>
        </div>
    )
}

export default VoteButton;