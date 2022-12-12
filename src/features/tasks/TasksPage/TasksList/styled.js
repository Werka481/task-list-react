import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 28px;
    margin: 20px;
    margin-top: 0px;
    background-color: #fff;
    border: 1px solid #ccc;
    list-style-type: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-rows: 35px;
    grid-template-columns: 1fr 14fr 1fr;
    grid-row-gap: 20px;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #ccc;

    ${({ hidden }) => hidden && css`
        display: none;
    `};

    @media (max-width: 767px) {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 35px 1fr 35px;
        grid-column-gap: 5px;
        justify-content: center;
        word-break: break-word;
        padding: 15px;

        ${({ hidden }) => hidden && css`
            display: none;
        `};    
    };
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `};
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const DoneButton = styled(Button)`
    background-color: #137413;
    border: 1px solid #137413;
    transition: 1s;

    &:hover {
        background-color: hsl(120, 72%, 35%);
        cursor: pointer;
    };

    &:active {
        background-color: hsl(120, 72%, 40%);
    };
`;

export const RemoveButton = styled(Button)`
    display: grid;
    justify-self: end;
    background-color: crimson;
    border: 1px solid crimson;
    transition: 1s;

    &:hover {
        background-color: hsl(348, 83%, 55%);
        cursor: pointer;
    };

    &:active {
        background-color: hsl(348, 83%, 60%);
    }; 
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    &:visited {
        color: blue;
    };
`;