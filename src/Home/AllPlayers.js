import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPlayers = () => {
  const [allTeams, setAllTeams] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/")
      .then((data) => data.json())
      .then((result) => {
        setAllTeams(result.data);
        setLoading(false);
      });
  }, []);

  const teamsData = allTeams.map((dat) => (
    <div className="team_card" key={dat._id}>
      <button type="submit">
        <Link to={`/team/${dat.Team}/${dat._id}`}>
          {/* <Link to="/teamdata"> */}
          <div className="team-image-div">
            <img src={dat.image} />
          </div>
          <div className="team-content-div">
            <h1>{dat.Name}</h1>
            <p>{dat.Team}</p>
          </div>
        </Link>
      </button>
    </div>
  ));

  return (
    <Fragment>
      <h1></h1>
      {loading && (
        <p style={{ textAlign: "center", fontSize: "40px" }}>Loading...</p>
      )}
      {!loading && <div className="team_cards">{teamsData}</div>}
    </Fragment>
  );
};

export default AllPlayers;
