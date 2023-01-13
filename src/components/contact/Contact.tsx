import { Heading1, Heading5 } from "../../global.styled";
import { Heading1Container } from "../about/About.styled";
import { FooterInfoBlock, IconBlock } from "../layout/Footer.styled";
import {
  ContactInfo,
  ContactSectionContainer,
  InfoContainer,
} from "./Contact.styled";

const Contact = () => {
  return (
    <ContactSectionContainer id="contact">
      <Heading1Container>
        <Heading1>Contact</Heading1>
      </Heading1Container>

      <ContactInfo>
        <Heading5>
          You can catch me by writing to me personally or through listed social
          media
        </Heading5>
        <InfoContainer>
          <FooterInfoBlock>
            <IconBlock src="email.png" alt="email" />
            <Heading5>lukasz.kos98@gmail.com</Heading5>
          </FooterInfoBlock>
          <FooterInfoBlock
            href="https://github.com/lukaszkosobucki"
            target="_blank"
            rel="noreferrer"
          >
            <IconBlock src="github.png" alt="github" />
            <Heading5>/lukaszkosobucki</Heading5>
          </FooterInfoBlock>
          <FooterInfoBlock
            href="https://pl.linkedin.com/in/lukasz-kosobucki"
            target="_blank"
            rel="noreferrer"
          >
            <IconBlock src="linkedin.png" alt="linkedin" />
            <Heading5>/lukasz-kosobucki</Heading5>
          </FooterInfoBlock>
        </InfoContainer>
      </ContactInfo>
    </ContactSectionContainer>
  );
};

export default Contact;
