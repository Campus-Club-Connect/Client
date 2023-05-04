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
      desc: "This looks beautiful...",
      img: "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
    {
      id: 3,
      name: "Evelyn",
      userId: 3,
      profilePic:
        "https://i.pinimg.com/564x/84/b6/71/84b6711634f292361a44f36394ce4cab.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga id nemo quam tempore excepturi ipsum explicabo quaerat saepe sit dolore, quod, vitae rerum provident non dicta! Molestias non beatae officia.",
    },
    {
      id: 4,
      name: "Kazuha",
      userId: 4,
      profilePic:
        "https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg",
      desc: "Chanel has my vibe sometimes...",
      img: "https://i.pinimg.com/564x/9a/e4/26/9ae4267c064a2edc5478514e8dd18a69.jpg",
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
