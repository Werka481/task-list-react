import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: #eeecec;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;