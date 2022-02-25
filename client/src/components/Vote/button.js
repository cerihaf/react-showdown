import React from "react";

const VoteButton = ({animal, bgcolor}) => {

    const classnames = `h-60 px-36 border-solid border-2 border-amber-800 ${bgcolor} text-4xl rounded-3xl`


    return(
        <div className="bg-charcoal flex-1 flex justify-center">
            <button className={classnames}>
                {animal}
            </button>
        </div>
    )
}

export default VoteButton;