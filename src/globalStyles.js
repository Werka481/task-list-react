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
        max-width: 800px;
        margin: 0 auto;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;