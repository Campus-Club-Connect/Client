import { useState } from "react";
import ClubInfoMMD from "../../../components/clubInfo/ClubInfoMMD";
import Reviews from "../../../components/reviews/Reviews";
import "./mmd.scss";
import InnerTab from "../../../components/innerTab/InnerTab";
import ClubActivities from "../../../components/clubActivities/ClubActivities";
import ClubRightBar from "../../../components/clubRightBar/ClubRightBar";
import ClubDiscussion from "../../../components/clubDiscussion/ClubDiscussion";
import Chats from "../../../components/chats/Chats";
import ClubRegistrationForm from "../../../components/clubRegistrationForm/ClubRegistrationForm";
import { useQuery } from "react-query";
import { makeRequest } from "../../../axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const MMD = () => {
  const [currentInnerTab, setInnerTab] = useState(0);
  const { currentUser } = useContext(AuthContext);

  const {
    isLoading: clubLoading,
    error: clubError,
    data: clubData,
  } = useQuery(["clubs"], () =>
    makeRequest.get("/clubs/find/3").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="mmd-page">
      <div className="innerNavBar">
        <InnerTab currentInnerTab={currentInnerTab} setInnerTab={setInnerTab} />
      </div>
      {currentInnerTab !== 3 ? (
        <div className="content">
          <div className="center">
            {currentInnerTab === 0 ? (
              <ClubInfoMMD />
            ) : currentInnerTab === 1 ? (
              <ClubActivities currentClub={clubData} />
            ) : currentInnerTab === 2 ? (
              <ClubDiscussion currentClub={clubData} />
            ) : (
              "<AlternativeComponent />"
            )}
          </div>
          <div className="right">
            {currentInnerTab === 0 ? (
              <Reviews />
            ) : currentInnerTab === 1 ? (
              <ClubRightBar />
            ) : currentInnerTab === 2 ? (
              <Chats />
            ) : (
              "Choose a Club"
            )}
          </div>
        </div>
      ) : (
        <div className="registrationContent">
          <div className="allFill">
            <ClubRegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default MMD;
