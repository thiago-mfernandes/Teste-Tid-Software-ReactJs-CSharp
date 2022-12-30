import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'styled-components'
import { BoasVindas } from "./components/BoasVindas";
import { Clientes } from "./components/Clientes";
import { Header } from './components/Header'
import { ContextProvider } from "./Context";
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { FormCliente } from "./components/Formulario/FormCliente";
import { FormPlano } from "./components/Formulario/FormPlano";
import { Planos } from "./components/Planos";

import 'react-toastify/dist/ReactToastify.min.css';

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
              <Route path="/Clientes/Formulario" element={ <FormCliente /> } />
              <Route path="/editarCliente/:id" element={ <FormCliente /> } />
              <Route path="/Planos" element={ <Planos />} />
              <Route path="/Planos/Formulario" element={ <FormPlano /> } />
              <Route path="/editarPlano/:id" element={ <FormPlano /> } />
              <Route path="/Finanças" element={ <BoasVindas /> } />
              <Route path="/Relatórios" element={ <BoasVindas /> } />
              <Route path="/Configurações" element={ <BoasVindas /> } />
            </Routes>      
        </ThemeProvider>
      </ContextProvider>      
    </BrowserRouter>    
  )
}
