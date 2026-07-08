import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body{
        min-height: 100vh;
        background-color: #181f36;
    }

    a{
        text-decoration: none;
    }
`;
