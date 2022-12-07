import styled from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: 767px) {
        display: grid;
        align-items: center;
    };
`;

export const Button = styled.button`
    background-color: #fff;
    padding: 10px;
    font-size: 15px;
    border: none;
    color: teal;
    transition: 1s;

    &:hover {
        color: hsl(180, 100%, 40%);
        cursor: pointer;
    };

    &:active {
        color: hsl(180, 100%, 55%);
    };

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    };
`;