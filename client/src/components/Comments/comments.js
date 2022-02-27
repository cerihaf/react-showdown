export default function CommentsView({
  comments,
  comment,
  setComment,
  createComment,
}) {
  return (
    <div className="bg-charcoal">
      <article className="">
        {comments?.map((comment) => {
          return (
            <div>
              <h4>{comment.username + ": "}</h4>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </article>
      <textarea
        placeholder="Voice your opinion!"
        onChangeCapture={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <button className="" onClickCapture={() => createComment()}>
        Submit
      </button>
    </div>
  );
}
