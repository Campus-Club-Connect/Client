import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  // Temporary
  const comments = [
    {
      id: 1,
      desc: "Evelyn is becokening the leafs to change tides again",
      name: "Kazuha",
      userId: 1,
      profilePicture:
        "https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg",
    },
    {
      id: 2,
      desc: "Evelyn is looking beautiful as always!",
      name: "Lie Bei",
      userId: 2,
      profilePicture:
        "https://i.pinimg.com/564x/ce/c9/49/cec9497f455ed2d9c4634157951a89de.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment..." />
        <button>Send</button>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
