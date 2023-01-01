import styled from "styled-components";
import { dispositivo } from "../../styles/themes/default";
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`

  @media ${dispositivo.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 17.5%;
  }
`