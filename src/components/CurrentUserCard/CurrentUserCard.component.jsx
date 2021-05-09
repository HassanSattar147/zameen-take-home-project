import React from "react";
import "./current-user-card.styles.css";

function CurrentUserCard(props) {
  const {
    currUserAvatarUrl,
    currUserName,
    currUserLogin,
  } = props.currentUserDetails;
  return (
    <div className="user-card">
      <img src={currUserAvatarUrl} alt={`Image of ${currUserName}`} />
      <div className="user-card__details">
        <h2>{currUserName}</h2>
        <p>User Login: {currUserLogin}</p>
      </div>
    </div>
  );
}

export default CurrentUserCard;
