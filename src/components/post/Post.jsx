import "./post.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
              <span className="date">1m ago</span>
            </div>
          </div>

          <FontAwesomeIcon icon={faEllipsis} className="moreOptions" />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
            <FontAwesomeIcon icon="fa-thumbs-up" />
            <p>1.2K likes this</p>
          </div>
          <div className="item" onClick={() => setCommonOpen(!commentOpen)}>
            <p>19 Comments</p>
          </div>
        </div>

        <div className="actions">
          <div className="item">
            {liked ? (
              <FontAwesomeIcon icon="fa-thumbs-up" />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
            )}
            <p>Like</p>
          </div>
          <div className="item" onClick={() => setCommonOpen(!commentOpen)}>
            <FontAwesomeIcon icon="fa-regular fa-comment" />
            <p>Comment</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
            <p>Share</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faLocation} />
            <FontAwesomeIcon icon="fa-regular fa-location" />
            <p>Pin</p>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
