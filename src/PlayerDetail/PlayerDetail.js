import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlayerDetails = () => {
  const { playerdata } = useParams();
  //   console.log(playerdata);

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/playerName/${playerdata}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result.data);
        setPlayer(result.data);
      });
  }, []);

  const playerDat = player.map((dat) => (
    <div className="player_data" key={dat._id}>
      <div className="team-image-div">
        <img
          src="https://cdn2.iconfinder.com/data/icons/player-rounded-set/154/user-login-player-function-name-avatar-512.png"
          width="50%"
          height="50%"
        />
      </div>
      <div className="team-content-div">
        <h1>
          Player Name:{" "}
          <span style={{ color: "olive", fontSize: "40px" }}>
            {dat.playerData.playerName}
          </span>
        </h1>
        <h2>From: {dat.playerData.from}</h2>
        <h3>Description: {dat.playerData.description}</h3>
        <h4>Price: {dat.playerData.price}</h4>
        <h5>Is Playing: {dat.playerData.isPlaying}</h5>
      </div>
    </div>
  ));

  return <div style={{ textAlign: "center" }}>{playerDat}</div>;
};

export default PlayerDetails;
