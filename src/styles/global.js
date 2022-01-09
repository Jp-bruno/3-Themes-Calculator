import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --distance: 4px;
        /* 4, 20, 36 */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 700;
        font-family: 'Spartan', sans-serif;
    }

    body {

        background-color: ${props => props.theme.mainBackground};
    }

    .App {
        height: 100vh;
        display: grid;
        place-items: center;
    }
`;