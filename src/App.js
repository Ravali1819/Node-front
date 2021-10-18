import { Fragment } from "react";
import { Route, Switch } from "react-router";
import AllPlayers from "./Home/AllPlayers";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import AddPlayer from "./AddData/AddPlayer";
import TeamDetail from "./Team-Details/teamDetail";
import PlayerDetails from "./PlayerDetail/PlayerDetail";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <AllPlayers />
        </Route>
        <Route path="/add-player" exact>
          <AddPlayer />
        </Route>
        <Route path="/team/:teamdata/:teamId">
          <TeamDetail />
        </Route>
        <Route path="/playerName/:playerdata">
          <PlayerDetails />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
