import "./clubDiscussion.scss";
import ClubDiscussionPosts from "../clubDiscussionTopics/ClubDiscussionPosts";

const ClubDiscussion = ({ currentClub }) => {
  return (
    <div className="clubDiscussion">
      <ClubDiscussionPosts currentClub={currentClub} />
    </div>
  );
};

export default ClubDiscussion;
