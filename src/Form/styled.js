import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 20px;
    margin-top: 0px;
    padding: 20px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 5px;
        justify-content: stretch;
    };
`;

export const Input = styled.input`
    padding: 10px;
    max-width: 600px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    border: 1px solid teal;
    color: #fff;
    transition: 1s;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    };
`;