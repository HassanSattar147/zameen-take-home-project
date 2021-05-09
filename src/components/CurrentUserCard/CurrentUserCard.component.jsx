import React from "react";
import "./current-user-card.styles.css";

function CurrentUserCard(props) {
  const {
    currUserAvatarUrl,
    currUserName,
    currUserLogin,
    currUserBio,
  } = props.currentUserDetails;
  return (
    <div className="user-card-container">
      <div className="user-card">
        <div className="user-card-header-gradient"></div>
        <img className="user-card-img" src={currUserAvatarUrl} alt={`Image of ${currUserName}`} />
        <div className="user-card__details">
          <h2>{currUserName}</h2>
          <p>
            User Login:<br /> <span className="code">{currUserLogin}</span>
          </p>
          <p><br />User Bio:<br /> {currUserBio}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentUserCard;
