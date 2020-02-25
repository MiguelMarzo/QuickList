import { AppBar, ListItem, List } from '@material-ui/core';
import { styled } from '../../theme/themedStyledComponents';
import { Link } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
    background-color: #05668D !important;
    margin-bottom: 24px;
`

export const StyledList = styled(List)`
    height: 100%;
    background-color: #23395d;
`
export const StyledLink = styled(Link)`
    padding: 6px;
    margin-bottom: 8px;

    text-decoration: none;
    color: white;
    font-size: 24px;
`

export const MainMenuIcon = styled.img`
    width: 35px;
    height: 35px;
`