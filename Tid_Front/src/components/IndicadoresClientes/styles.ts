import styled from "styled-components";
import { dispositivo } from "../../styles/themes/default";
import { motion } from 'framer-motion'

export const Container = styled(motion.section)`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media ${dispositivo.desktop} {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		padding: 0 1.25rem;

		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
`

export const CardIndicador = styled.div`
	background-color: ${(props) => props.theme.white};
	width: 100%;
	border-radius: 8px;
	padding: 16px;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: row;

	@media ${dispositivo.desktop} {
		width: 23.5%;
		margin-bottom: 0;
	}

	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		@media ${dispositivo.desktop} {
			justify-content: flex-start;
		}
	}

	h2 {
		font-size: 0.875rem;
		@media ${dispositivo.desktop} {
			font-size: 0.75rem;
			margin-bottom: 0.5rem;
		}
	}

	span {
		font-size: 1.25rem;
		color: ${(props) => props.theme["cinza-escuro"]};
		@media ${dispositivo.desktop} {
			font-size: 0.875rem;
		}
	}

	svg {
		color: ${(props) => props.theme.roxo};
	}
`