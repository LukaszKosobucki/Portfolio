import styled from "styled-components";
import { colors, Heading5, ParagraphLarge } from "../../global.styled";
import { motion } from "framer-motion";

export const Heading1Container = styled(motion.div)`
  border-bottom: 1px solid ${colors.shyBlack};
  display: flex;
  min-width: 100%;
  justify-content: center;
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    min-width: 80%;
  }
`;
export const SectionContainer = styled.div`
  display: flex;
  min-width: 50%;
  flex-direction: column;
  min-height: 100vh;
  scroll-margin-top: 4rem;
  align-items: center;
  margin-bottom: 4rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 90%;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 200px;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const IconBlock = styled.img`
  height: 50px;
  width: 50px;
`;

export const TextBlock = styled(ParagraphLarge)`
  max-width: 700px;
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PhotoBlock = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const ContactInfoContainer = styled(Heading5)`
  @media (max-width: 600px) {
    width: 250px;
    text-align: center;
  }
`;
