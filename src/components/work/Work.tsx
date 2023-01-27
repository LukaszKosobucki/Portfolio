import { Heading3, ParagraphBase } from "../../global.styled";
import {
  IconBlockWork,
  IconsContainer,
  Photo,
  PhotoAnchor,
  PhotoContainer,
  ProjectInfoBox,
  TaskList,
  WorkContainer,
} from "./Work.styled";

const Work = ({ work }: { work: any }) => {
  return (
    <WorkContainer>
      <PhotoContainer>
        <PhotoAnchor href={work.website} target="_blank" rel="noreferrer">
          <Photo src={work.photo} alt="project" />
        </PhotoAnchor>
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
          {work.drawio && (
            <a href={work.drawio} target="_blank" rel="noreferrer">
              <IconBlockWork src="icons/drawio.svg" alt="drawio link" />
            </a>
          )}
          {work.sonarcloud && (
            <a href={work.sonarcloud} target="_blank" rel="noreferrer">
              <IconBlockWork
                src="icons/sonarcloud.svg"
                alt="sonarcloud scan link"
              />
            </a>
          )}
        </IconsContainer>
      </ProjectInfoBox>
    </WorkContainer>
  );
};

export default Work;
