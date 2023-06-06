import "./presidentPoll.scss";
import BillDorji from "./../../assets/testProfiles/billDorji.png";
import ChimiDorji from "./../../assets/testProfiles/chimiDorji.png";
import KaliDorji from "./../../assets/testProfiles/kaliDorji.png";
import Kinchap from "./../../assets/testProfiles/kinchapDorji.png";
import Jamphel from "./../../assets/testProfiles/jamphel.jpg";

const PresidentPoll = () => {
  return (
    <div className="presidentPoll">
      <div className="container">
        <div className="menu">
          <h4>Try Out For Presidency!</h4>
          <span>5 hrs</span>

          <div className="candidates">
            <div className="scroll">
              <div className="item">
                <img src={BillDorji} alt="" />
              </div>
              <p>Bill Dorji</p>
              <button>Vote</button>
            </div>
            <div className="scroll">
              <div className="item">
                <img src={KaliDorji} alt="" />
              </div>
              <p>Kali Wangdi</p>
              <button>Vote</button>
            </div>
            <div className="scroll">
              <div className="item">
                <img src={Kinchap} alt="" />
              </div>
              <p>Kinchap Dorji</p>
              <button>Vote</button>
            </div>
            <div className="scroll">
              <div className="item">
                <img src={ChimiDorji} alt="" />
              </div>
              <p>Chime Dorji</p>
              <button>Vote</button>
            </div>

            <div className="scroll">
              <div className="item">
                <img src={Jamphel} alt="" />
              </div>
              <p>Jamphel Yigzin Samdrup</p>
              <button>Vote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentPoll;
