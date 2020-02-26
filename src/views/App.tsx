import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TableGames from "./TableGames/TableGames";
import './app.scss';
import { MainMenu } from "../components/MainMenu/MainMenu";
import { styled } from "../theme/themedStyledComponents";

export const App = () =>  (
  <Router>
    <MainMenu />

    <MainContent>
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
    </MainContent>
  </Router>
)

const MainContent = styled.div`
  padding: 10px;
`
