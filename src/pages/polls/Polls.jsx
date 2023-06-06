import "./polls.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import BeforeClubRightBar from "../../components/miscellenious/beforeClubRightBar/BeforeClubRightBar";
import InnerTabPolls from "../../components/innerTabPolls/InnerTabPolls";
import Posts from "../../components/posts/Posts";
import PresidentPoll from "../../components/presidentPoll/PresidentPoll";

const Polls = () => {
  const [currentInnerTab, setInnerTab] = useState(0);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="polls-page">
      <div className="innerNavBar">
        <InnerTabPolls
          currentInnerTab={currentInnerTab}
          setInnerTab={setInnerTab}
        />
      </div>
      {currentInnerTab !== 3 ? (
        <div className="content">
          <div className="center">
            {currentInnerTab === 0 ? <Posts /> : <PresidentPoll />}
          </div>
          <div className="right">
            {currentInnerTab === 0 ? (
              <BeforeClubRightBar />
            ) : currentInnerTab === 1 ? (
              <BeforeClubRightBar />
            ) : (
              "Choose a Club"
            )}
          </div>
        </div>
      ) : (
        <div className="registrationContent">
          <div className="allFill">{/* <ClubRegistrationForm /> */}</div>
        </div>
      )}
    </div>
  );
};

export default Polls;
