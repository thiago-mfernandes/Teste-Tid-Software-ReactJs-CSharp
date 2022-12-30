import styled, { css } from "styled-components";

interface MenuProps {
	isVisible: boolean
}

export const Container = styled.div<MenuProps>`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 0 0 24px 24px;
	box-shadow: 0px 8px 8px rgba(109, 108, 108, 0.08);
	background-color: ${(props) => props.theme["azul-claro"]};
	width: 100%;
	height: 8rem;
	overflow: hidden;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: absolute;
	transition: all .3s ease-in-out;	

	> svg {
		position: absolute;
		top: 5.5rem;
	}

	${({ isVisible }) => isVisible && css`
		height: 90vh;
	`}
`

export const BoxLogo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 0 1rem;
	width: 100%;	
`

export const Titulos = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 1.75rem;
		color: ${(props) => props.theme.azul};

		> span {
			color: ${(props) => props.theme.roxo};
		}
	}

	h2 {
		font-size: 0.75rem;
	}
`
