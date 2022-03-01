import React, { useState, useEffect } from "react";
import CommentsView from "./comments";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MATCHUP } from "../../utils/queries";
import { ADD_COMMENT } from "../../utils/mutations";


const Comments = ({ matchupId, voteId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { data, refetch } = useQuery(GET_MATCHUP, {
    variables: { id: matchupId },
  });



  const [addComment] = useMutation(ADD_COMMENT);
  const createComment = async () => {
    try {
      await addComment({
        variables: { comment: comment, color: +voteId, matchup_id: +matchupId },
      });

      refetch();
    } catch (e) {
      return(e);
    }
  };

  const updateComments = () => {
    setComments(data.getMatchup.comments);
  };

  useEffect(() => {
    updateComments();
  });

  return (
    <div>
      <CommentsView
        comment={comment}
        setComment={setComment}
        comments={comments}
        createComment={createComment}
      />
    </div>
  );
};

export default Comments;
