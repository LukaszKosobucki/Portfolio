import { Heading5 } from "../../global.styled";
import { FooterContainer, FooterInfoBlock, IconBlock } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoBlock href="mailto:lukasz.kos98@gmail.com?Subject=subject">
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
    </FooterContainer>
  );
};

export default Footer;
