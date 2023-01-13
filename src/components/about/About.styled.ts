import styled from "styled-components";
import { colors, ParagraphLarge } from "../../global.styled";

export const Heading1Container = styled.div`
  border-bottom: 1px solid ${colors.shyBlack};
  display: flex;
  min-width: 100%;
  justify-content: center;
  margin-bottom: 3rem;
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
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

export const IconBlock = styled.img`
  height: 50px;
  width: 50px;
`;

export const TextBlock = styled(ParagraphLarge)`
  max-width: 700px;
`;

export const PhotoBlock = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;
