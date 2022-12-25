import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	height: 100vh;
	padding: 2rem 2rem 6rem;

	img {
		max-width: 100%;
		height: auto;
		margin-bottom: 4rem;
	}

	h2 {
		font-size: 1rem;
		color: ${(props) => props.theme.azul};
		text-align: center;
	}
`