import styled from "styled-components";
import { dispositivo } from "../../../styles/themes/default";
import { motion } from 'framer-motion'

export const ContainerForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  margin: 9rem 1.25rem 2rem;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.white};
	border-radius: 8px;

  @media ${dispositivo.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    width: 78.5%;
    margin-top: 1.5rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  button {
    background-color: ${(props) => props.theme.roxo};
		color: ${(props) => props.theme.white};
		border: 0;
		border-radius: 8px;
		padding: 4px;
		margin-bottom: 1.5rem;
		width: 100%;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		&:active {
			opacity: 0.8;
		}

    @media ${dispositivo.desktop} {      
      width: 47.5%;      
    }
  }

  a {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.white};
    padding-top: 4px;
    @media ${dispositivo.desktop} {
      color: ${(props) => props.theme.white};
    }
  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:last-of-type {
    margin-bottom: 2rem;
  }
  @media ${dispositivo.desktop} {
    width: 47.5%;
  }

  label {
    margin-bottom: 0.75rem;
  }

  input {
		border: 0;
		height: 2rem;
		width: 100%;
		padding: 4px 8px 8px;
		border-radius: 8px;
		background-color: ${(props) => props.theme.bgApp};
		outline: none;
    vertical-align: middle;
    margin-bottom: 1rem;

		&::placeholder {
      padding: 4px 8px 8px;
			font-size: 0.75rem;
		}

    &:focus {
      padding: 4px 8px 8px;
      background-color: ${(props) => props.theme["azul-claro"]};
    }
	}
`

export const ContainerTipoLista = styled(ContainerInput)`

  select {
    border: 1px solid ${(props) => props.theme.bgApp};
    border-radius: 8px;
    height: 2rem;
    color: ${(props) => props.theme["cinza-Fontes"]};
    padding: 4px 8px 8px;
    outline: none;

    &:focus {
      padding: 4px 8px 8px;
      background-color: ${(props) => props.theme["azul-claro"]};
    }
  }
`
