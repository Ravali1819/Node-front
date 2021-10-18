import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [value, setValue] = useState();

  const seacrhHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="navigation">
      <nav className="nav_bar">
        <div className="nav_search_bar">
          <input
            type="search"
            placeholder="Search by team name"
            onChange={seacrhHandler}
          />
        </div>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/add-player">
          <div>Add Player</div>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
