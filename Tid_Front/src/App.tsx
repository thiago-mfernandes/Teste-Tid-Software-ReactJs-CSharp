import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { BoasVindas } from "./components/BoasVindas";
import { Clientes } from "./components/Clientes";
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
          <Routes>
            <Route path="/" element={ <BoasVindas />} />
            <Route path="/Dashboard" element={ <BoasVindas /> } />
            <Route path="/Agendamentos" element={ <BoasVindas /> } />
            <Route path="/Clientes" element={ <Clientes /> } />
            <Route path="/Financas" element={ <BoasVindas /> } />
            <Route path="/Relatorios" element={ <BoasVindas /> } />
            <Route path="/Configuracoes" element={ <BoasVindas /> } />
          </Routes>
      {/*
        <img src="" alt="Componente imagem tela de entrada" />

      <div>clientes/cards/tabela</div>
      */}
       
      </ThemeProvider>
    </BrowserRouter>
    
  )
}
