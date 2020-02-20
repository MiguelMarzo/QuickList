import * as React from 'react';
import { Toolbar, IconButton, ListItem, List } from '@material-ui/core';
import { Link } from "react-router-dom";
import { StyledAppBar, StyledDrawer } from './MaintMenu.styles';

const menuOptions = [
  {text: 'Home', route: '/'}, 
  {text: 'New game', route: '/new-game'}, 
  {text: 'About', route: '/about'}
]

export const MainMenu = () => {

  const [menuIsOpened, setMenuIsOpened] = React.useState(false);

  const toggleMenu = (open) => () => {
    setMenuIsOpened(open)
  };

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleMenu(true)} edge="start"  color="inherit" aria-label="menu">
            Abrir
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer anchor="left" open={menuIsOpened} onClose={toggleMenu(false)}>
        <List>
          {
            menuOptions.map((option, index) => (
            <ListItem button key={index} onClick={toggleMenu(false)}>
            <Link to={option.route}>{option.text}</Link> 
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  )
}