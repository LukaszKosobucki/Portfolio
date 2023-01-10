import styled from "styled-components";
import { colors } from "../../global.styled";

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
`;

export const FooterInfoBlock = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;
