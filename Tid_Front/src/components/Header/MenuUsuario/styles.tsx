import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-top: 1px solid ${(props) => props.theme["cinza-Linha"]};
	padding: 1.5rem 0.75rem;
`

export const BoxUsuario = styled.div`
	display: flex;
	align-items: center;
	
	img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-right: 16px;
	}

	div {
		display: flex;
		flex-direction: column;

		h2, span {
			font-size: 0.75rem;
		}
	}
`

export const BoxInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	margin: 0.5rem 0;

	h2, span {
		font-size: 0.75rem;
		font-weight: lighter;
	}

	// essa fonte nao tem esse caractere!
	span > span {
		font-family: 'Armata';
	}

`

export const BoxGrafico = styled.div`
	width: 70%;
	height: 10px;
	background-color: ${(props) => props.theme.roxo};
	border-radius: 16px;
	border: 0;
	margin-bottom: 1.5rem;

	div {
		width: 80%;
		height: 10px;
		background-color: ${(props) => props.theme.azul};
		border-radius: 16px;
		border: 0;
		margin-bottom: 1.5rem;
		}
`

export const BotaoEditar = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: 1px solid ${(props) => props.theme.roxo};
	border-radius: 8px;
	background-color: transparent;
	width: 70%;
	height: 2rem;
	color: ${(props) => props.theme.roxo};
`