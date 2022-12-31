import styled, { css } from "styled-components";
import { dispositivo } from "../../../styles/themes/default";

interface NavProps {
	isVisible: boolean
}

export const NavContainer = styled.nav<NavProps>`
  margin: 1.5rem 0;

	@media ${dispositivo.desktop} {
		margin: 1rem 0;
	}
  
	ul {
		list-style: none;
		opacity: 0;
		overflow: hidden;		

		${({ isVisible }) => isVisible && css`
			opacity: 1;
			overflow: hidden;
			transition: opacity 0.8s ease-in-out 3s;
		`}
	}

	li {
		display: flex;
		align-items: center;
		padding: 0.35rem;

		svg {
			margin-right: 0.25rem;

			@media ${dispositivo.desktop} {
				margin-right: 1.25rem;
			}
		}

		a {
			text-decoration: none;
			font-size: 0.95rem;

			@media ${dispositivo.desktop} {
				font-size: 0.75rem;
			}
		}
	}

	li:hover svg {
		color: ${(props) => props.theme.azul};	
	}

	li:hover a {
		color: ${(props) => props.theme.azul};	
	}
`
