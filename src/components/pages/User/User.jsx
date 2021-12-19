import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDispaly">
          <div className="userDispalyTop">
            <img
              src="https://images.pexels.com/photos/1686864/pexels-photo-1686864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="person"
              className="userDispalyTopImg"
            />
            <div className="userDispalyTopTitle">
              <div className="userDispalyTopUsername">Anna Beckham</div>
              <div className="userDispalyTopUserTitle">Software Developer</div>
            </div>
          </div>
          <div className="userDispalyBottom">
            <span className="userDispalyBottomTitle">Account Details</span>
            <div className="userDispalyBottomInfo">
              <PermIdentity className="userDispalyBottomIcon" />
              <span className="userDispalyBottomInfoTitle">annabeck99</span>
            </div>
            <div className="userDispalyBottomInfo">
              <CalendarToday className="userDispalyBottomIcon" />
              <span className="userDispalyBottomInfoTitle">10.12.2000</span>
            </div>
            <span className="userDispalyBottomTitle">Contact Details</span>
            <div className="userDispalyBottomInfo">
              <PhoneAndroid className="userDispalyBottomIcon" />
              <span className="userDispalyBottomInfoTitle">+10 565 6551</span>
            </div>
            <div className="userDispalyBottomInfo">
              <MailOutline className="userDispalyBottomIcon" />
              <span className="userDispalyBottomInfoTitle">
                annabeck@gmail.com
              </span>
            </div>
            <div className="userDispalyBottomInfo">
              <LocationSearching className="userDispalyBottomIcon" />
              <span className="userDispalyBottomInfoTitle">New York |USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annabeck99"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Anna Becker"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annabeck99@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+1 321 3531"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="New York | USA"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1686864/pexels-photo-1686864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
