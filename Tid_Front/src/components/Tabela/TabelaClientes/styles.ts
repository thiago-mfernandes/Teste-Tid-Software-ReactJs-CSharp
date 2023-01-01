import styled from "styled-components";
import { dispositivo } from "../../../styles/themes/default";
import { motion } from "framer-motion"

export const ContainerSection = styled(motion.section)`
  background-color: ${(props) => props.theme.white};
	border-radius: 8px;
	padding: 16px;

	@media ${dispositivo.desktop} {
		margin-top: 6rem;
	}

	h2 {
		font-size: 1.125rem;
		margin-bottom: 1rem;
	}

	a {
		width: 60%;
		text-decoration: none;
		display: flex;
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
			width: 15rem;
			margin-bottom: 1rem;
		}

		svg {
			margin-right: 8px;
		}
	}

	input {
		border: 0;
		height: 2rem;
		width: 100%;
		padding: 16px;
		border-radius: 8px;
		background-color: ${(props) => props.theme.bgApp};
		outline: none;
		margin-bottom: 3rem;
		&::placeholder {
			font-size: 0.875rem;
		}

		@media ${dispositivo.desktop} {
			width: 50%;
			margin-bottom: 1.5rem;
		}
	}
`
export const ContainerTabela = styled.table`
	background-color: ${(props) => props.theme["cinza-Tabela"]};
	border-radius: 8px;
	display: block;
	table-layout: fixed;
	word-wrap: break-word;
	
	@media ${dispositivo.desktop} {
		display: flex;
		flex-direction: column;
		//overflow:hidden para o border-radius aparecer;
		overflow: hidden;
	}

	thead {
		height: 2.5rem;
		background-color: ${(props) => props.theme["cinza-Tabela"]};
		display: none;
		width: 100%;
		@media ${dispositivo.desktop} {
			display: flex;
			height: 2.5rem;
		}
		
		tr {
			text-align: center;
			display: block;
			width: 100%;			
			@media ${dispositivo.desktop} {
				background-color: ${(props) => props.theme["cinza-Destaque"]};
				color: ${(props) => props.theme.white};
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
			}

			th {
				padding: 4px;
				vertical-align: middle;
				width: 100%;
				@media ${dispositivo.desktop} {
					font-size: 0.75rem;
				}
			}
		}
	}

	tbody {
		display: block;
		width: 100%;
		margin: 1rem 0;	

		@media ${dispositivo.desktop} {
			margin: 0.01rem 0;
		}	

		tr {
			width: 100%;
			display: block;	
			@media ${dispositivo.desktop} {
				display: flex;
				&:first-of-type {
					border-top: 5px solid ${(props) => props.theme.white};
				}
			}		

			td {
				display: block;
				width: 100%;
				padding: 5%;
				text-align: right;
				position: relative;
				border-bottom: 5px solid ${(props) => props.theme.white};
				font-size: 0.75rem;
				font-weight: bold;
				&:last-of-type {
					border-bottom: 5px solid ${(props) => props.theme.roxo};
					width: 100%;
				}
				
				&::before {
					content: attr(data-label);
					text-overflow: ellipsis;
					position: absolute;
					left: 0;
					width: 95%;
					padding-left: 16px;
					font-size: .75rem;
					text-align: left;
					vertical-align: middle;
        }
				
				@media ${dispositivo.desktop} {
					display: flex;
					justify-content: center;
					align-items: center;
					text-overflow: ellipsis;
					font-size: .75rem;
					padding: 0.75%;
					text-align: center;
					vertical-align: middle;
					&::before {
						content: ""
					}
					&:last-of-type {
						border-bottom: 5px solid ${(props) => props.theme.white};
						width: 100%;
					}
				}
			}
		}	
	}
`
