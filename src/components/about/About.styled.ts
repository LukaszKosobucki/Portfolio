import styled from "styled-components";
import { colors } from "../../global.styled";

export const Heading1Container = styled.div`
  border-bottom: 1px solid ${colors.shyBlack};
  display: flex;
  min-width: 100%;
  justify-content: center;
`;
export const SectionContainer = styled.div`
  display: flex;
  min-width: 50%;
  flex-direction: column;
  min-height: 100vh;
  scroll-margin-top: 4rem;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 90%;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const IconBlock = styled.img`
  height: 50px;
  width: 50px;
`;
