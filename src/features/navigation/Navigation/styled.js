import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: center;
    background-color: teal;
    list-style-type: none;
    margin: 0;
    padding: 16px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    width: 100%;
    padding: 14px;

    &.active {
        font-weight: bold;
    };
`;