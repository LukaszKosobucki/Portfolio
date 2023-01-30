import styled from "styled-components";
import { colors } from "../../global.styled";
import { motion } from "framer-motion";

export const FooterContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;
  min-height: 140px;
  margin-left: 10%;
  margin-right: 10%;
  border-top: 1px solid ${colors.shyBlack};
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    margin: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const FooterInfoBlock = styled(motion.a)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const IconBlock = styled(motion.img)`
  height: 36px;
  width: 36px;
`;
