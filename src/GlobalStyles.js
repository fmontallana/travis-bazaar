import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
      :root {
        --blue: #21C6E9;
        --gray: #7F9D9D;
      }
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #202020;
      }
`