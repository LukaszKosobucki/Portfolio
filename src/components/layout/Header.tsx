import { Heading5 } from "../../global.styled";
import {
  Logo,
  LogoContainer,
  Navbar,
  NavContainer,
  Title,
} from "./Header.styled";

const Header = () => {
  return (
    <Navbar>
      <LogoContainer href="#start">
        <Logo src="logo_transparent.png" alt="logo" />
      </LogoContainer>
      <Title>Portfolio</Title>
      <NavContainer>
        <a href="#about">
          <Heading5>About</Heading5>
        </a>
        <a href="#work">
          <Heading5>Work</Heading5>
        </a>
        <a href="#contact">
          <Heading5>Contact</Heading5>
        </a>
      </NavContainer>
    </Navbar>
  );
};

export default Header;
