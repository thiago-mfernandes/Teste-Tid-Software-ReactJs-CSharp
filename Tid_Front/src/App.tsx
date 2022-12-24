import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      {/*
        <img src="" alt="Componente imagem tela de entrada" />

      <div>clientes/cards/tabela</div>
  */}
    </ThemeProvider>
  )
}
