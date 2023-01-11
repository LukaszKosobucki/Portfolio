import styled from "styled-components";
import { SectionContainer } from "../about/About.styled";

export const ContactSectionContainer = styled(SectionContainer)`
  min-height: 50vh;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 8%;
  align-items: start;
`;

export const ContactInfo = styled(InfoContainer)`
  gap: 1rem;
  margin-top: 12%;
  align-items: center;
`;
