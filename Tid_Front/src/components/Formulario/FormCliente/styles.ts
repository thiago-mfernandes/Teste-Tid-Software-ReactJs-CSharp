import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 0.75rem;
  }

  input {
		border: 0;
		height: 2rem;
		width: 100%;
		padding: 4px 8px 8px;
		border-radius: 8px;
		background-color: ${(props) => props.theme.bgApp};
		outline: none;
    vertical-align: middle;
    margin-bottom: 2rem;

		&::placeholder {
      padding: 4px 8px 8px;
			font-size: 0.75rem;
		}

    &:focus {
      padding: 4px 8px 8px;
      background-color: ${(props) => props.theme["azul-claro"]};
    }
	}
`

export const ContainerTipoLista = styled(ContainerInput)`

  select {
    border: 1px solid ${(props) => props.theme.bgApp};
    border-radius: 8px;
    height: 2rem;
    color: ${(props) => props.theme["cinza-fontes"]};
    padding: 4px 8px 8px;

    &:focus {
      padding: 4px 8px 8px;
      background-color: ${(props) => props.theme["azul-claro"]};
    }
  }
`