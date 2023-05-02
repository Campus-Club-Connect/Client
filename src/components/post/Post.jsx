import "./post.scss";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommonOpen] = useState(false);

  //  Temporary
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
            {liked ? <ThumbUpRoundedIcon /> : <ThumbUpOutlinedIcon />}
            1.2K Likes
          </div>
          <div className="item" onClick={() => setCommonOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            19 Comments
          </div>
          <div className="item">
            <ShareRoundedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
