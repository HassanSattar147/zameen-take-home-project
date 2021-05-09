import React from "react";
import "./fork-card.styles.css";

function ForkCard({ forkDetails }) {
  const { login, name, avatar_url } = forkDetails;
  return (
    <div>
      <div className="fork-card">
        <img src={avatar_url} alt={`Image of ${name}`} />
        <div className="fork-card__details">
          <h2>{name}</h2>
          <p>User Login: {login}</p>
        </div>
      </div>
    </div>
  );
}

export default ForkCard;
