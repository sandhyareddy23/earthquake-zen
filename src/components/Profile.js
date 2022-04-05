import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "./utils";

const Profile = ({ profileDetails }) => {
  return (
    <>
      <div className="mainContainer headerFont">Profile</div>
      <section className="mainContainer">
        <div className="thumbnail">
          <img
            src={profileDetails.avatarImage}
            alt="avatar"
            className="thumbnail"
          />
        </div>
        <div>
          {Object.keys(profileDetails).map((profile, index) => {
            if (profile === "avatarImage") return;
            return (
              <div className="flex-div" key={index}>
                <div className="card-item">{capitalize(profile)}</div>
                <div className="card-item">{profileDetails[`${profile}`]}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
Profile.propTypes = {
  avatarImage: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
};
export default Profile;
