import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TableGames } from "./TableGames/TableGames";
import './app.scss';
import { MainMenu } from "../components/MainMenu/MainMenu";

export const App = () =>  (
  <Router>
      <MainMenu />

      <Switch>
        <Route path="/new-game">
          <>New game view</>
        </Route>
        <Route path="/about">
          <>About view</>
        </Route>
        <Route path="/">
          <TableGames />
        </Route>
      </Switch>
  </Router>
)
