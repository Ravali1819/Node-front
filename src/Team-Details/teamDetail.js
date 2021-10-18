import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const TeamDetail = () => {
  const { teamdata, teamId } = useParams();
  // console.log(teamdata);

  const [team, setTeam] = useState([]);
  const [length, setLength] = useState();

  const [data, setData] = useState(false);
  const [teams, setTeams] = useState([]);

  const [head, setHead] = useState([]);

  const [teamName, setTeamName] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/team/${teamdata}/${teamId}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setHead(result.header);
        setTeam(result.data);
        setLength(result.data.length);
        setTeamName(result.team);
        setData(true);
      });
    fetch("http://localhost:5000/")
      .then((data) => data.json())
      .then((result) => {
        setTeams(result.data);
      });
  }, [teamdata, length]);

  const top = head.map((t) => (
    <div>
      <h3>Top BatsMan: {t.Batsman}</h3>
      <h3>Top Bowler: {t.Bowler}</h3>
    </div>
  ));

  const teamsData = team.map((dat) => (
    <div className="team" key={dat.playerData._id}>
      <button type="submit">
        <Link to={`/playerName/${dat._id}`}>
          {/* <Link to="/teamdata"> */}
          <div className="team-image-div">
            <img src="https://cdn2.iconfinder.com/data/icons/player-rounded-set/154/user-login-player-function-name-avatar-512.png" />
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
        </Link>
      </button>
    </div>
  ));

  return (
    <Fragment>
      <div>
        <h1>Team Name: {teamName} </h1>
        <h2>Total Players: {length}</h2>
      </div>
      <div>{top}</div>
      {!data && <p>No Data Found...</p>}
      {team.length != 0 && team && (
        <div className="team_players">{teamsData}</div>
      )}
    </Fragment>
  );
};

export default TeamDetail;
