import { useState, useContext } from "react";
import {
  ButtonTransparent,
  Heading3,
  ParagraphBase,
} from "../../global.styled";
import { GlobalStateContext } from "../../utils/ContextWrapper";
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
import { AnimatePresence } from "framer-motion";

const Work = ({ work }: { work: any }) => {
  const [isReading, setIsReading] = useState<boolean>(false);
  const globalServices = useContext(GlobalStateContext);
  return (
    <WorkContainer
      transition={{ duration: 0.4, delay: 0.1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <PhotoContainer
        key={work.id}
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <PhotoAnchor href={work.website} target="_blank" rel="noreferrer">
          <Photo src={work.photo} alt="project" />
        </PhotoAnchor>
      </PhotoContainer>
      <ProjectInfoBox
        key={work.id}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Heading3>{work.title}</Heading3>
        <ParagraphBase>{work.description}</ParagraphBase>

        {globalServices.matches ? (
          <AnimatePresence>
            <ButtonTransparent onClick={() => setIsReading(!isReading)}>
              {isReading ? (
                <ParagraphBase> Read less</ParagraphBase>
              ) : (
                <ParagraphBase> Read more...</ParagraphBase>
              )}
            </ButtonTransparent>
            {isReading && (
              <TaskList
                key={work.title}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
              >
                {work.tasks.map((task: any) => (
                  <li key={task}>
                    <ParagraphBase>{task}</ParagraphBase>
                  </li>
                ))}
              </TaskList>
            )}
          </AnimatePresence>
        ) : (
          <TaskList>
            {work.tasks.map((task: any) => (
              <li key={task}>
                <ParagraphBase>{task}</ParagraphBase>
              </li>
            ))}
          </TaskList>
        )}

        <IconsContainer>
          {work.github && (
            <a href={work.github} target="_blank" rel="noreferrer">
              <IconBlockWork
                src="github.png"
                alt="github project link"
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
              />
            </a>
          )}
          {work.figma && (
            <a href={work.figma} target="_blank" rel="noreferrer">
              <IconBlockWork
                src="figma.png"
                alt="figma project link"
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
              />
            </a>
          )}
          {work.drawio && (
            <a href={work.drawio} target="_blank" rel="noreferrer">
              <IconBlockWork
                src="icons/drawio.svg"
                alt="drawio link"
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
              />
            </a>
          )}
          {work.sonarcloud && (
            <a href={work.sonarcloud} target="_blank" rel="noreferrer">
              <IconBlockWork
                src="icons/sonarcloud.svg"
                alt="sonarcloud scan link"
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
              />
            </a>
          )}
        </IconsContainer>
      </ProjectInfoBox>
    </WorkContainer>
  );
};

export default Work;
