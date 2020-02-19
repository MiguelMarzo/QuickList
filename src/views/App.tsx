import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { TableGames } from "./TableGames/TableGames";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <TableGames />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
