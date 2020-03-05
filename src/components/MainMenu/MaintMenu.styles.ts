import { AppBar, List } from '@material-ui/core';
import { styled } from '../../theme/themedStyledComponents';
import { Link } from "react-router-dom";

export const MainMenuWrapper = styled.div`
    margin-bottom: 24px;
`
export const StyledAppBar = styled(AppBar)`
    background-color: #05668D !important;
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
    position: absolute;
    left: 10px;
    width: 35px;
    height: 35px;
`
export const MainTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
`
export const ConexionErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff4cc;
    padding: 4px;
`