import * as React from 'react';
import { Toolbar, IconButton, Drawer, ListItem } from '@material-ui/core';
import { StyledAppBar, StyledList, StyledLink, MainMenuIcon, MainTitle } from './MaintMenu.styles';
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
            <MainTitle>TablePlay!</MainTitle>
        </Toolbar>
      </StyledAppBar>

      <Drawer anchor="left" open={menuIsOpened} onClose={toggleMenu(false)}>
        <StyledList>
          {
            menuOptions.map((option, index) => (
              <ListItem button key={index} onClick={toggleMenu(false)}>
                <StyledLink to={option.route}>{option.text}</StyledLink> 
              </ListItem>
            ))
          }
        </StyledList>
      </Drawer>
    </>
  )
}