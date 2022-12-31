import styled from "styled-components";
import { dispositivo } from "../../styles/themes/default";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	height: 100vh;
	padding: 2rem 2rem 6rem;

	@media ${dispositivo.desktop} {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12rem;
		position: absolute;
		top: 0;
		right: 0px;
		width:80%
	}

	img {
		max-width: 100%;
		height: auto;
		margin-bottom: 4rem;

		@media ${dispositivo.desktop} {
			width: 60%;
		}
	}

	h2 {
		font-size: 1rem;
		color: ${(props) => props.theme.azul};
		text-align: center;
	}
`