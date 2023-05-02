import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Yoimiya",
      userId: 1,
      profilePic:
        "https://styles.redditmedia.com/t5_44t81x/styles/communityIcon_d79pgj3m1hf71.png",
      desc: "The festivities aren't all mirth and laughters",
      img: "https://images7.alphacoders.com/126/1263603.jpg",
    },
    {
      id: 2,
      name: "Evelyn",
      userId: 2,
      profilePic:
        "https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg",
      desc: "Once upon a time my brother and I found this thing!",
      img: "https://i.pinimg.com/564x/04/7d/8c/047d8cad07884ced87f6933e8d3dc47c.jpg",
    },
    {
      id: 3,
      name: "Evelyn",
      userId: 3,
      profilePic:
        "https://i.pinimg.com/564x/84/b6/71/84b6711634f292361a44f36394ce4cab.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga id nemo quam tempore excepturi ipsum explicabo quaerat saepe sit dolore, quod, vitae rerum provident non dicta! Molestias non beatae officia.",
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
