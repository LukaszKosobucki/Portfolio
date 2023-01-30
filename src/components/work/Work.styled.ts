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
    width: 300px;
    margin: 0;
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
    min-height: auto;
    padding: 0;
    margin: 0;
  }
`;

export const Photo = styled.img`
  max-height: 500px;
  max-width: 400px;
  @media (max-width: 600px) {
    border-radius: 25px 25px 0px 0px;
    width: 300px;
  }
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
  @media (max-width: 600px) {
    max-width: 290px;
    min-width: 290px;
    min-height: auto;
    width: 290px;
    margin: 0;
    border: none;
    padding: 0 5px 0 5px;
  }
`;

export const TaskList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  flex: 1;
  -webkit-padding-start: 0;
  @media (max-width: 600px) {
    width: 270px;
    padding-left: 0px;
    margin-left: 1rem;
    transform-origin: top;
  }
`;

export const IconBlockWork = styled(IconBlock)`
  height: 24px;
  width: 24px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;

export const PhotoAnchor = styled.a`
  transition-duration: 0.5s;

  @media (min-width: 600px) {
    &:hover {
      scale: 1.1;
    }
  }
  @media (max-width: 600px) {
    border-radius: 25px 25px 0px 0px;
  }
`;
