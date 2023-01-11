import { Heading3, ParagraphBase } from "../../global.styled";
import {
  IconBlockWork,
  IconsContainer,
  PhotoContainer,
  ProjectInfoBox,
  TaskList,
  WorkContainer,
} from "./Work.styled";

const Work = ({ work }: { work: any }) => {
  return (
    <WorkContainer>
      <PhotoContainer>
        <img src={work.photo} alt="project" />
      </PhotoContainer>
      <ProjectInfoBox>
        <Heading3>{work.title}</Heading3>
        <ParagraphBase>{work.description}</ParagraphBase>
        <TaskList>
          {work.tasks.map((task: any) => (
            <li>
              <ParagraphBase>{task}</ParagraphBase>
            </li>
          ))}
        </TaskList>
        <IconsContainer>
          {work.github && (
            <a href={work.github}>
              <IconBlockWork src="/github.png" alt="github project link" />
            </a>
          )}
          {work.figma && (
            <a href={work.figma}>
              <IconBlockWork src="/figma.png" alt="figma project link" />
            </a>
          )}
        </IconsContainer>
      </ProjectInfoBox>
    </WorkContainer>
  );
};

export default Work;
