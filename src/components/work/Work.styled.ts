import styled from "styled-components";
import { colors } from "../../global.styled";
import { IconBlock } from "../layout/Footer.styled";

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-height: 500px;
  max-width: 400px;
  min-height: 500px;
  min-width: 400px;
  padding-right: 1rem;
  border-right: 1px solid ${colors.shyBlack};
`;

export const Photo = styled.img`
  max-height: 500px;
  max-width: 400px;
`;

export const ProjectInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  max-width: 400px;
  min-height: 500px;
  min-width: 400px;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: start;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  flex: 1;
`;

export const IconBlockWork = styled(IconBlock)`
  height: 24px;
  width: 24px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
