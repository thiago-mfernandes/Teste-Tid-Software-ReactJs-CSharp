import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${(props) => props.theme.bgApp};    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font-family: "Michroma", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['cinza-fontes']}
  }
`
