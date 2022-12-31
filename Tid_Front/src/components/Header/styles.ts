import styled from "styled-components";
import { dispositivo } from "../../styles/themes/default";

export const Container = styled.header`

  @media ${dispositivo.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 17.5%;
  }
`