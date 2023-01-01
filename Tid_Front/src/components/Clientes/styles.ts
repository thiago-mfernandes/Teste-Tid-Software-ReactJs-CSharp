import styled from "styled-components";
import { dispositivo } from "../../styles/themes/default";

export const Container = styled.section`
    margin-top: 7rem;
    padding: 0 1.25rem;
    overflow: hidden;

    @media ${dispositivo.desktop} {
        position: absolute;
        top: 0;
        right: 0;
        width: 82.5%;
        margin-top: 1.5rem;
    }
`