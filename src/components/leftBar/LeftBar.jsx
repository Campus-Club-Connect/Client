import "./leftBar.scss";
import Anemo from "./../../assets/Element_Anemo.png";
import Pyro from "./../../assets/Element_Pyro.png";
import Cryo from "./../../assets/Element_Cryo.png";
import Dendro from "./../../assets/Element_Dendro.png";
import Electro from "./../../assets/Element_Electro.png";
import Geo from "./../../assets/Element_Geo.png";
import Hydro from "./../../assets/Element_Hydro.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="profileContainer">
          <div className="images">
            <img
              src={"/upload/" + currentUser.coverPic}
              className="cover"
              alt=""
            />
            <div className="profilePic">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
            </div>
          </div>

          <div className="uInfo">
            <div className="uEdit">
              <button>Show CCA</button>
            </div>
            <div className="uDetails">
              <div className="uTitle">
                <span>{currentUser.name}</span>
                <h3>A</h3>
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
        </div>

        <hr />
        <div className="menu">
          <span>Clubs</span>
          <div className="item">
            <img src={Anemo} alt="" />
            <span>Start-Up</span>
          </div>
          <div className="item">
            <img src={Pyro} alt="" />
            <span>LIA</span>
          </div>
          <div className="item">
            <img src={Hydro} alt="" />
            <span>MMD</span>
          </div>
          <div className="item">
            <img src={Cryo} alt="" />
            <span>Rovers</span>
          </div>
          <div className="item">
            <img src={Dendro} alt="" />
            <span>Integrity</span>
          </div>
          <div className="item">
            <img src={Geo} alt="" />
            <span>Tarayana</span>
          </div>
          <div className="item">
            <img src={Electro} alt="" />
            <span>G-Tech</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
