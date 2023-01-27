import { Heading5 } from "../../global.styled";
import { FooterContainer, FooterInfoBlock, IconBlock } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoBlock
        href="https://www.figma.com/file/Ue8NpN0LFtp5Z3XAIMWj43/Portfolio?node-id=30%3A28&t=RYYNGZofgrdqKWei-1"
        target="_blank"
        rel="noreferrer"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <IconBlock src="figma.png" alt="figma-portfolio" />
        <Heading5>Portfolio design</Heading5>
      </FooterInfoBlock>
      <FooterInfoBlock
        href="https://github.com/LukaszKosobucki/Portfolio"
        target="_blank"
        rel="noreferrer"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <IconBlock src="github.png" alt="github-portfolio" />
        <Heading5>Portfolio repository</Heading5>
      </FooterInfoBlock>
      <FooterInfoBlock
        href="https://sonarcloud.io/project/overview?id=LukaszKosobucki_Portfolio"
        target="_blank"
        rel="noreferrer"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <IconBlock src="icons/sonarcloud.svg" alt="sonarcloud-portfolio" />
        <Heading5>Portfolio SonarCloud</Heading5>
      </FooterInfoBlock>
    </FooterContainer>
  );
};

export default Footer;
