import styled from "styled-components";

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
	

`