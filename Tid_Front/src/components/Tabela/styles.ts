import styled from "styled-components";

export const ContainerSection = styled.section`
  background-color: ${(props) => props.theme.white};
	border-radius: 8px;
	padding: 16px;
	table-layout: fixed;
	word-wrap: break-word;

	h2 {
		font-size: 1.125rem;
		margin-bottom: 1rem;
	}

	button {
		background-color: ${(props) => props.theme.roxo};
		color: ${(props) => props.theme.white};
		border: 0;
		border-radius: 8px;
		padding: 4px;
		margin-bottom: 1.5rem;
		width: 60%;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		&:active {
			opacity: 0.8;
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
	}
`

export const ContainerTabela = styled.table`
	background-color: ${(props) => props.theme["cinza-Tabela"]};
	border-radius: 8px;
	display: block;

	thead {
		height: 2.5rem;
		background-color: ${(props) => props.theme["cinza-Tabela"]};
		//border-radius: 8px;
		display: none;
		width: 100%;
		
		tr {
			text-align: center;
			display: block;
			width: 100%;
			

			th {
				padding: 4px;
				vertical-align: middle;
				width: 100%;
			}
		}
	}

	tbody {
		display: block;
		width: 100%;
		margin: 1rem 0;
		

		tr {
			width: 100%;
			margin: 12rem 0;
			

			td {
				display: block;
				width: 204%;
				padding: 10% 5% 10% 10%;
				text-align: right;
				position: relative;
				border-bottom: 5px solid ${(props) => props.theme.white};
				font-size: 0.75rem;
				font-weight: bold;
				&:last-of-type {
					border-bottom: 5px solid ${(props) => props.theme.roxo};
				}

				&::before {
					content: attr(data-label);
					position: absolute;
					left: 0;
					width: 100%;
					padding-left: 15px;
					font-size: .75rem;
					text-align: left;
					vertical-align: middle;
        }
			}
		}	
	}
`
