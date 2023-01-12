import { Heading1, Heading5 } from "../../global.styled";
import { FooterInfoBlock } from "../layout/Footer.styled";
import {
  ContentContainer,
  Heading1Container,
  IconBlock,
  ImagesContainer,
  SectionContainer,
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
          <img
            src="/przystojniak.jpg"
            alt="me"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
          {listOfIcons.map((icon) => (
            <IconBlock src={"/icons" + icon} alt="" />
          ))}
        </ImagesContainer>

        <div>
          <p>some words</p>
        </div>
      </ContentContainer>
      <FooterInfoBlock>
        <img src="/download.png" alt="download" />
        <Heading5>Download my CV</Heading5>
      </FooterInfoBlock>
    </SectionContainer>
  );
};

export default About;
