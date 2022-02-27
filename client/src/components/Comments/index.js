import React, { useState, useEffect } from "react";
import CommentsView from "./comments";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MATCHUP } from "../../utils/queries";
import { ADD_COMMENT } from "../../utils/mutations";

const Comments = ({ matchupId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { data, refetch } = useQuery(GET_MATCHUP, {
    variables: { id: matchupId },
  });

  const [addComment] = useMutation(ADD_COMMENT);
  const createComment = async () => {
    try {
      console.log(comment);
      console.log(matchupId);
      const { data } = await addComment({
        variables: { comment: comment, matchupId: matchupId, color: 1 },
      });

      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const updateComments = () => {
    setComments(data.getMatchup.comments);
  };

  useEffect(() => {
    updateComments();
  }, [matchupId]);

  return (
    <CommentsView
      comment={comment}
      setComment={setComment}
      comments={comments}
      createComment={createComment}
    />
  );
};

export default Comments;
