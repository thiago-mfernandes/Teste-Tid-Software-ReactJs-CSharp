import styled from "styled-components";

export const ContainerTipoFormulario = styled.section`
  margin: 9rem 1.25rem 2rem;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.white};
	border-radius: 8px;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  fieldset {
    border: 0;
    margin-bottom: 3rem;
  }

  legend {
    margin-bottom: 0.25rem;
  }

  label {
    margin-right: 1.25rem;

    input {
      margin-right: 0.25rem;
    }
  }
`