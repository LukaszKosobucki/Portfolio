import { useState } from "react";
import { Heading1, Heading3, Heading5 } from "../../global.styled";
import { FooterInfoBlock } from "../layout/Footer.styled";
import {
  ContentContainer,
  Heading1Container,
  IconBlock,
  ImagesContainer,
  PhotoBlock,
  SectionContainer,
  TextBlock,
  TextContainer,
} from "./About.styled";

const listOfIcons = [
  "/angular.png",
  "/css3.png",
  "/database-search.png",
  "/figma2.png",
  "/firebase.png",
  "/git.png",
  "/html5.png",
  "/javascript.png",
  "/nodejs.png",
  "/postman.png",
  "/python.png",
  "/react.png",
  "/typescript.png",
];

const About = ({ isMobile }: { isMobile: boolean }) => {
  const [isReading, setIsReading] = useState<boolean>(false);

  return (
    <SectionContainer id="about">
      <Heading1Container
        transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ scale: 0.2 }}
        whileInView={{ scale: 1 }}
      >
        {isMobile ? <Heading1>About</Heading1> : <Heading3>About</Heading3>}
      </Heading1Container>
      <ContentContainer>
        <ImagesContainer
          transition={{ duration: 0.4, ease: "easeInOut" }}
          initial={{ x: "-3rem", scale: 0.2 }}
          whileInView={{ x: 0, scale: 1 }}
        >
          <PhotoBlock src="przystojniak.jpg" alt="me" />

          {listOfIcons.map((icon) => (
            <IconBlock src={"icons" + icon} alt="" key={icon} />
          ))}
          <FooterInfoBlock
            style={{ marginTop: "2rem" }}
            download
            href="download/Curriculum-Vitae-Łukasz-Kosobucki.pdf"
          >
            <img src="download.png" alt="download" />
            <Heading5>Download my CV</Heading5>
          </FooterInfoBlock>
        </ImagesContainer>
        {isMobile ? (
          <TextContainer
            transition={{ duration: 0.4, ease: "easeInOut" }}
            initial={{ x: "20rem", scale: 0.2 }}
            whileInView={{ x: 0, scale: 1 }}
          >
            <TextBlock>
              Hi, I am a passionate Frontend Developer with many skills and
              experience. My main programming languages and technologies are
              ReactJS with use of typescript. I also find myslef comfortable
              with Angular-Typescript as well as other minor backend tasks in
              Python or NodeJS. I find pleasure in developing new applications
              with pracical use in my daily life, or trying to upgrade existing
              application with my fresh take on them. In my free time I like to
              develop new personal skills or polish existing ones. My main
              hobbies at the moment are learning to play Piano and reading
              books. The rest of my free time I like to spent dong some other
              smaller hobbies like solving rubicks cube, folding origami,
              juggling, pen spinning and many others. You can find more about my
              proffesional life in my CV.
            </TextBlock>
          </TextContainer>
        ) : (
          <TextContainer
            key={"abouttext"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            initial={{ x: "20rem", scale: 0.2 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: 0, scale: 0 }}
          >
            {isReading && (
              <TextBlock>
                Hi, I am a passionate Frontend Developer with many skills and
                experience. My main programming languages and technologies are
                ReactJS with use of typescript. I also find myslef comfortable
                with Angular-Typescript as well as other minor backend tasks in
                Python or NodeJS. I find pleasure in developing new applications
                with pracical use in my daily life, or trying to upgrade
                existing application with my fresh take on them. In my free time
                I like to develop new personal skills or polish existing ones.
                My main hobbies at the moment are learning to play Piano and
                reading books. The rest of my free time I like to spent dong
                some other smaller hobbies like solving rubicks cube, folding
                origami, juggling, pen spinning and many others. You can find
                more about my proffesional life in my CV.
              </TextBlock>
            )}
            <button onClick={() => setIsReading(!isReading)}>
              {!isReading ? "Read more About me" : "Read less About me"}
            </button>
          </TextContainer>
        )}
      </ContentContainer>
    </SectionContainer>
  );
};

export default About;
