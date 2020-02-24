import * as React from 'react';
import { Toolbar, IconButton, Drawer } from '@material-ui/core';
import { Link } from "react-router-dom";
import { StyledAppBar, StyledList, StyledListItem, MainMenuIcon } from './MaintMenu.styles';
import menuIcon from './menuIcon.png';

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
            <MainMenuIcon src={menuIcon} />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      <Drawer anchor="left" open={menuIsOpened} onClose={toggleMenu(false)}>
        <StyledList>
          {
            menuOptions.map((option, index) => (
              <StyledListItem button key={index} onClick={toggleMenu(false)}>
                <Link to={option.route}>{option.text}</Link> 
              </StyledListItem>
            ))
          }
        </StyledList>
      </Drawer>
    </>
  )
}