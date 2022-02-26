import React, { useState } from "react";
import comment from "../../../../server/schemas/resolvers";

const Comments = () => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div classNameName="bg-charcoal">
      <div className="comments">
        <div className="comment-title">
          See what others said about this Matchup
        </div>
        <article className="comment-container comment-color-{{comment.color}}">
          <img
            className="user-avi"
            height="50"
            width="50"
            src="https://avatars.dicebear.com/api/croodles/{{comment.username}}.svg"
            alt="{{comment.username}}"
          />
          <div className="comment-body">
            <div className="author">
              <h4>{comment.username}</h4>
            </div>
            <div className="comment">{comment.comment}</div>
          </div>
        </article>
        <textarea placeholder="Voice your opinion!"></textarea>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Comments;
