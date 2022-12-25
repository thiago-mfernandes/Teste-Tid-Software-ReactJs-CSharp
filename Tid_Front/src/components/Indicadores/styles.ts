import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const CardIndicador = styled.div`
	background-color: ${(props) => props.theme.white};
	width: 100%;
	border-radius: 8px;
	padding: 16px;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: row;

	div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	h2 {
		font-size: 0.875rem;
	}

	span {
		font-size: 1.25rem;
		color: ${(props) => props.theme["cinza-escuro"]};
	}

	svg {
		color: ${(props) => props.theme["cinza-fontes"]};
	}
`