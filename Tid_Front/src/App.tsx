import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'styled-components'
import { BoasVindas } from "./components/BoasVindas";
import { Clientes } from "./components/Clientes";
import { Formulario } from "./components/Formulario";
import { Header } from './components/Header'
import { ContextProvider } from "./Context";
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <ToastContainer />
          <Header />
            <Routes>
              <Route path="/" element={ <BoasVindas />} />
              <Route path="/Dashboard" element={ <BoasVindas /> } />
              <Route path="/Agendamentos" element={ <BoasVindas /> } />
              <Route path="/Clientes" element={ <Clientes /> } />
              <Route path="/Clientes/Formulario" element={ <Formulario /> } />
              <Route path="/Financas" element={ <BoasVindas /> } />
              <Route path="/Relatorios" element={ <BoasVindas /> } />
              <Route path="/Configuracoes" element={ <BoasVindas /> } />
            </Routes>       
        </ThemeProvider>
      </ContextProvider>      
    </BrowserRouter>
    
  )
}
