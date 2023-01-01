import {  BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header"
import { ContextProvider } from "./Context";
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default";
import "react-toastify/dist/ReactToastify.min.css";
import { RotasAnimadas } from "./components/RotasAnimadas";

export function App() {
  
  return (
    <BrowserRouter>
      <ContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <ToastContainer />
          <Header />
          <RotasAnimadas /> 
        </ThemeProvider>
      </ContextProvider>      
    </BrowserRouter>    
  )
}
