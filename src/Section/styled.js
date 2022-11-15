import styled from "styled-components";

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1px;
    align-items: center;
    justify-content: start;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    margin-bottom: 0px;
    margin-top: 0px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        flex-wrap: wrap;
    };
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0px;
`;