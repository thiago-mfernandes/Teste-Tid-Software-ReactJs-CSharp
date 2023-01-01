import {  BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { BoasVindas } from "../BoasVindas";
import { Clientes } from "../Clientes";
import { FormCliente } from "../Formulario/FormCliente";
import { FormPlano } from "../Formulario/FormPlano";
import { Planos } from "../Planos";
import { AnimatePresence } from "framer-motion"

export function RotasAnimadas() {

  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  )
}