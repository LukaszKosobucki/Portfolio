import styled from "styled-components";
import { colors } from "../../global.styled";
import { IconBlock } from "../layout/Footer.styled";
import { motion } from "framer-motion";

export const WorkContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  box-shadow: 4px 4px 4px ${colors.shyBlack};
  background-color: ${colors.colorBlack100};
  border-radius: 25px;
  padding: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const PhotoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 400px;
  min-height: 500px;
  min-width: 400px;
  padding-right: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Photo = styled.img`
  max-height: 500px;
  max-width: 400px;
`;

export const ProjectInfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colors.shyBlack};
  padding-left: 2rem;
  padding-right: 1rem;
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

export const PhotoAnchor = styled.a`
  transition-duration: 0.5s;
  &:hover {
    scale: 1.1;
  }
  @media (max-width: 600px) {
    &:hover {
      scale: 1.1;
    }
  }
`;
