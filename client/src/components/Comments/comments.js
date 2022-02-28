export default function CommentsView({
  comments,
  comment,
  setComment,
  createComment,
}) {
  return (
    <div className="flex flex-col bg-slate-800 bg-opacity-80 rounded-xl p-4">
      <h1 className="text-center text-antiquewhite font-brand text-2xl">
        Do the people agree?
      </h1>
      <article className="font-login">
        {comments?.map((comment) => {
          return (
            <div
              key={comment.id}
              className={`p-2 m-2 rounded-xl flex items-center ${
                comment.color === 2 ? "bg-persiangreen" : "bg-burntsienna"
              }`}
            >
              <img
                src={`https://avatars.dicebear.com/api/croodles/${comment.username}.svg`}
                alt="user profile"
                className="rounded-full bg-antiquewhite inline w-16"
              />
              <div className="pl-4">
                <h4 className="text-antiquewhite">{comment.username}</h4>
                <span>{comment.comment}</span>
              </div>
            </div>
          );
        })}
      </article>
      <div className="flex flex-col">
        <textarea
          placeholder="Voice your opinion!"
          onChangeCapture={(e) => setComment(e.target.value)}
          className="rounded-lg text-center font-login p-2 m-2 border-box"
        ></textarea>
        <div className="text-center">
          <button
            className="bg-maizecrayola hover:bg-sandybrown hover:text-maizecrayola text-zinc-600 border-solid border-2 border-HeliotropeGray text-lg font-brand w-36 rounded-md"
            onClickCapture={() => createComment()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
