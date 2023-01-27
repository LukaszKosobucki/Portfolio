import { useState } from "react";
import { Heading5 } from "../../global.styled";
import { FooterInfoBlock } from "./Footer.styled";
import { NavContainer } from "./Header.styled";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>click</button>

      {isOpen && (
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
    </>
  );
};

export default HamburgerMenu;
