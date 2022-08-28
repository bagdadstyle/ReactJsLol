import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const API_KEY = "RGAPI-dc90cb76-ed48-4380-a504-b42a53be1589";
  const [playerData, setPlayerData] = useState({});
  function onSearch(text) {
    if (text.length > 2) {
      fetch(
        `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${text}?api_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            let data = {
              id: response.id,
              name: response.name,
              level: response.summonerLevel,
              profileIconId: response.profileIconId,
            };
            setPlayerData(data);
          } else {
            alert("Jugador no encontrado");
          }
        })
        .catch((error) => {
          alert("Jugador no encontrado");
          console.log(error);
        });
    }
  }
  console.log(playerData);
  return (
    <div className="App">
      <Navbar />
      <Form onSearch={onSearch} />
      <Card playerData={playerData} level={300} />
    </div>
  );
}

export default App;
