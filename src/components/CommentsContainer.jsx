const commentsData = [
  {
    name: "Vivek Payal",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    replies: [],
  },
  {
    name: "Vivek Payal",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    replies: [
      {
        name: "Vivek Payal",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        replies: [
          {
            name: "Vivek Payal",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            replies: [
              {
                name: "Vivek Payal",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vivek Payal",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    replies: [
      {
        name: "Vivek Payal",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        replies: [
          {
            name: "Vivek Payal",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            replies: [],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <>
      <div className="mt-4 flex gap-2 rounded-md bg-gray-100 p-2">
        <img
          className="h-12 w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLG_0TYg1-OS3tf41zsLu5xw_iUo_QQu2o8joqcSBaoWavLd2IhnDFEEg7bbk3QdNbTv8&usqp=CAU"
          alt="user-img"
        />
        <div className="mt-3 px-3 shadow-sm">
          <h1>{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black pl-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Comments</h1>
      return <CommentList comments={commentsData} />;
    </div>
  );
};

export default CommentsContainer;
