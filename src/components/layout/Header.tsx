import { Heading5 } from "../../global.styled";
import { GlobalStateContext } from "../../utils/ContextWrapper";
import { FooterInfoBlock } from "./Footer.styled";
import {
  Logo,
  LogoContainer,
  Navbar,
  NavContainer,
  Title,
} from "./Header.styled";
import { useContext } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const globalServices = useContext(GlobalStateContext);

  return (
    <Navbar>
      <LogoContainer
        href="#start"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <Logo src="logo_transparent.png" alt="logo" />
      </LogoContainer>
      <Title>Portfolio</Title>
      {globalServices.matches ? (
        <HamburgerMenu />
      ) : (
        <NavContainer>
          <FooterInfoBlock
            href="#about"
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <Heading5>About</Heading5>
          </FooterInfoBlock>
          <FooterInfoBlock
            href="#work"
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <Heading5>Projects</Heading5>
          </FooterInfoBlock>
          <FooterInfoBlock
            href="#contact"
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <Heading5>Contact</Heading5>
          </FooterInfoBlock>
        </NavContainer>
      )}
    </Navbar>
  );
};

export default Header;
