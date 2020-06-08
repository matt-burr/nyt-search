import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }
    body {
        min-height: 100%;
        margin: 0;
        color: white;
        font-family: 'OpenSans-Light';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: radial-gradient(
        circle at 100%,
        #333,
        #333 50%,
        rgb(0, 0, 0) 75%,
        #333 75%
        );
    }`

export default GlobalStyles
