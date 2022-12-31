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
	height: 5rem;
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
		transition: all .3s ease-in-out;
		transform: ${({isVisible}) => isVisible ? 'translateY(0px)' : 'translateY(-64px)'};
	}

	${({ isVisible }) => isVisible && css`
		height: 90vh;
	`}
`

export const BoxLogo = styled.div<MenuProps>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 0 1rem;
	width: 100%;	

	img {
		transition: all .3s ease-in-out .2s;
		transform: ${({isVisible}) => isVisible ? 'translateY(0px)' : 'translateY(-100px)'};
	}
`

export const Titulos = styled.div<MenuProps>`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 1.75rem;
		color: ${(props) => props.theme.azul};
		transition: all .3s ease-in-out .3s;
		transform: ${({isVisible}) => isVisible ? 'translateX(0px)' : 'translateX(160px)'};

		> span {
			color: ${(props) => props.theme.roxo};
		}
	}

	h2 {
		font-size: 0.75rem;
		transition: all .3s ease-in-out;
		transform: ${({isVisible}) => isVisible ? 'translateX(0px)' : 'translateX(-100px)'};
	}
`
