import styled from "styled-components";
import ReactModal from 'react-modal';

export const ContainerTD = styled.td`

	div {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-end;

		button {
			margin: 0;
			margin-left: 4px;
			width: 2.5rem;
			height: 1.75rem;
			background-color: ${(props) => props.theme.roxo};
			display: flex;
			align-items: center;
			justify-content: center;
		
			svg {
				margin-right: 0;
				width: 100%;
				height: 100%;
			}
			
			a {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				cursor: pointer;
			}
		}
	}
`;

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background: rgba(0,0,0,0.3);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem;
  z-index: 99999;
`;

export const ContainerModal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
	top: 40%;
	left: auto;
	right: auto;
	bottom: auto;
	background: white;
	z-index: 9999;
	width: 80%;
	height: 10rem;
	border-radius: 8px;
	padding: 2rem 1.25rem;

	h2 {
		width: 100%;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
	}

	hr {
		color: ${(props) => props.theme["cinza-Linha"]};
		width: 100%;
		margin: 0.5rem 0 1.5rem auto;
	}

	div {
		display: flex;
		justify-content: space-between;
		width: 100%;

		button {
			border: 0;
			border-radius: 8px;
			background-color: ${(props) => props.theme.roxo};;
			width: 45%;
			height: 2.5rem;
			color: ${(props) => props.theme.white};
		}
	}
`;
