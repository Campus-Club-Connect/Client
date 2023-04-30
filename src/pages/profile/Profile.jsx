import "./profile.scss";
import Anemo from "./../../assets/Element_Anemo.png";
import Pyro from "./../../assets/Element_Pyro.png";
import Cryo from "./../../assets/Element_Cryo.png";
import Dendro from "./../../assets/Element_Dendro.png";
import Electro from "./../../assets/Element_Electro.png";
import Geo from "./../../assets/Element_Geo.png";
import Hydro from "./../../assets/Element_Hydro.png";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileContainer">
        <div className="images">
          <img
            src="https://images.alphacoders.com/116/1169181.jpg"
            alt=""
            className="cover"
          />
          <div className="profilePic">
            <img
              src="https://i.pinimg.com/564x/14/3f/66/143f663ec52f338ecdaa53f3265b62cd.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="uInfo">
          <div className="uEdit">
            <button>Edit profile</button>
          </div>
          <div className="uDetails">
            <div className="uTitle">
              <span>Naganohara Yoimiya</span>
              <h3>Member</h3>
            </div>
            <div className="clubAffiliations">
              <h3>Club Affiliations:</h3>
              <div className="clubs">
                <div className="images">
                  <img src={Pyro} alt="" />
                </div>
                <div className="images">
                  <img src={Hydro} alt="" />
                </div>
                <div className="images">
                  <img src={Dendro} alt="" />
                </div>
                <div className="images">
                  <img src={Cryo} alt="" />
                </div>
                <div className="images">
                  <img src={Electro} alt="" />
                </div>
                <div className="images">
                  <img src={Geo} alt="" />
                </div>
                <div className="images">
                  <img src={Anemo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
