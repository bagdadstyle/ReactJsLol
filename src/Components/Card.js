import React from "react";
import "../Styles/Card.css";

export default function Card({ playerData }) {
  return (
    <div className="card-container">
      <div className="card-details">
        <h2>
          {playerData.name ? playerData.name : "Inserte nombre de jugador: "}
        </h2>
        <p>{playerData.level && `Nivel: ${playerData.level}`}</p>
        {
          <img
            src={
              playerData.profileIconId
                ? `http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${playerData.profileIconId}.png`
                : "https://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/4568.png"
            }
            alt=""
          />
        }
      </div>
    </div>
  );
}
