import { Heading3, ParagraphBase } from "../../global.styled";
import {
  IconBlockWork,
  IconsContainer,
  Photo,
  PhotoContainer,
  ProjectInfoBox,
  TaskList,
  WorkContainer,
} from "./Work.styled";

const Work = ({ work }: { work: any }) => {
  return (
    <WorkContainer>
      <PhotoContainer>
        <a href={work.website} target="_blank" rel="noreferrer">
          <Photo src={work.photo} alt="project" />
        </a>
      </PhotoContainer>
      <ProjectInfoBox>
        <Heading3>{work.title}</Heading3>
        <ParagraphBase>{work.description}</ParagraphBase>
        <TaskList>
          {work.tasks.map((task: any) => (
            <li key={task}>
              <ParagraphBase>{task}</ParagraphBase>
            </li>
          ))}
        </TaskList>
        <IconsContainer>
          {work.github && (
            <a href={work.github} target="_blank" rel="noreferrer">
              <IconBlockWork src="github.png" alt="github project link" />
            </a>
          )}
          {work.figma && (
            <a href={work.figma} target="_blank" rel="noreferrer">
              <IconBlockWork src="figma.png" alt="figma project link" />
            </a>
          )}
        </IconsContainer>
      </ProjectInfoBox>
    </WorkContainer>
  );
};

export default Work;
