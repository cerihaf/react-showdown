import React from "react";

const VoteButton = ({animal, bgcolor}) => {

    const classnames = `w-full border-solid border-2 border-amber-800 ${bgcolor} h-96 text-4xl rounded-3xl`


    return(
        <div className="bg-charcoal flex-1">
            <button className={classnames}>
                {animal}
            </button>
        </div>
    )
}

export default VoteButton;