import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { Drawer, AppBar, Toolbar, IconButton, ListItem, List } from '@material-ui/core';
import { TableGames } from "./TableGames/TableGames";
import './app.scss';

const menuOptions = [
  {text: 'Home', route: '/'}, 
  {text: 'New game', route: '/new-game'}, 
  {text: 'About', route: '/about'}
]

export const App = () => {
  const [menuIsOpened, setMenuIsOpened] = React.useState(false);

  const toggleMenu = (open) => event => {
    setMenuIsOpened(open)
  };

  return (
    <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleMenu(true)} edge="start"  color="inherit" aria-label="menu">
              Abrir
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={menuIsOpened} onClose={toggleMenu(false)}>
          <List>
            {
              menuOptions.map((option, index) => (
              <ListItem button key={index} onClick={toggleMenu(false)}>
                <Link to={option.route}>{option.text}</Link> 
              </ListItem>
            ))}
          </List>
        </Drawer>

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
}
