import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/no-me-entero-de-nada.jpg";
//import "../stylesheets/Profile.css";

function Profile(props) {
  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar preview__article--img js__profile-image"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
