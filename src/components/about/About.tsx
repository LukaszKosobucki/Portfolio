import { Heading1 } from "../../global.styled";
import { Heading1Container, SectionContainer } from "./About.styled";

const About = () => {
  return (
    <SectionContainer id="about">
      <Heading1Container>
        <Heading1>About</Heading1>
      </Heading1Container>
      <section>
        <img src="" alt="me" />
        <div>
          <p>some words</p>
        </div>
      </section>
    </SectionContainer>
  );
};

export default About;
