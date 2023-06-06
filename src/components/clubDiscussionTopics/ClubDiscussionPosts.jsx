import ClubPost from "../clubPost/ClubPost";
import "./clubDiscussionPosts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const ClubDiscussionPosts = ({ currentClub }) => {
  const { clubId, adminId, clubName, logo, members, bgImage } = currentClub;

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/club/discussions/" + clubId).then((res) => {
      return res.data;
    })
  );
  return (
    <div className="clubDiscussionPosts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <ClubPost post={post} key={post.id} />)}
    </div>
  );
};

export default ClubDiscussionPosts;
