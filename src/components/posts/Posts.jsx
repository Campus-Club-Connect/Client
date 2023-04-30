import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Evelyn",
      userId: 1,
      profilePic:
        "https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg",
      desc: "Once upon a time my brother and I found this thing!",
      img: "https://i.pinimg.com/564x/04/7d/8c/047d8cad07884ced87f6933e8d3dc47c.jpg",
    },
    {
      id: 2,
      name: "Evelyn",
      userId: 2,
      profilePic:
        "https://i.pinimg.com/564x/84/b6/71/84b6711634f292361a44f36394ce4cab.jpg",
      desc: "Lorem ipsum gypsum",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
