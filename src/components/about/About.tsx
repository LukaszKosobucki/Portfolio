import { Heading1, Heading5 } from "../../global.styled";
import { FooterInfoBlock } from "../layout/Footer.styled";
import {
  ContentContainer,
  Heading1Container,
  IconBlock,
  ImagesContainer,
  PhotoBlock,
  SectionContainer,
  TextBlock,
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

const About = () => {
  return (
    <SectionContainer id="about">
      <Heading1Container>
        <Heading1>About</Heading1>
      </Heading1Container>
      <ContentContainer>
        <ImagesContainer>
          <PhotoBlock src="przystojniak.jpg" alt="me" />

          {listOfIcons.map((icon) => (
            <IconBlock src={"icons" + icon} alt="" />
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

        <div>
          <TextBlock>
            some wordssome wordssome wordssome wordssome some wordssome
            wordssome wordssome wordssome some wordssome wordssome wordssome
            wordssome some wordssome wordssome wordssome wordssome
          </TextBlock>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default About;
