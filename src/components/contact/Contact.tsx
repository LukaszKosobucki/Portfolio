import { Heading1, Heading5 } from "../../global.styled";
import { ContactInfoContainer, Heading1Container } from "../about/About.styled";
import { FooterInfoBlock, IconBlock } from "../layout/Footer.styled";
import {
  ContactInfo,
  ContactSectionContainer,
  InfoContainer,
} from "./Contact.styled";

const Contact = () => {
  return (
    <ContactSectionContainer id="contact">
      <Heading1Container
        transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <Heading1>Contact</Heading1>
      </Heading1Container>

      <ContactInfo
        transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ContactInfoContainer>
          You can catch me by writing to me personally or through listed social
          media
        </ContactInfoContainer>
        <InfoContainer>
          <FooterInfoBlock
            href="mailto:lukasz.kos98@gmail.com?Subject=subject"
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <IconBlock src="email.png" alt="email" />
            <Heading5>lukasz.kos98@gmail.com</Heading5>
          </FooterInfoBlock>
          <FooterInfoBlock
            href="https://github.com/lukaszkosobucki"
            target="_blank"
            rel="noreferrer"
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <IconBlock src="github.png" alt="github" />
            <Heading5>/lukaszkosobucki</Heading5>
          </FooterInfoBlock>
          <FooterInfoBlock
            href="https://pl.linkedin.com/in/lukasz-kosobucki"
            target="_blank"
            rel="noreferrer"
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
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
