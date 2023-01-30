import styled from "styled-components";
import { colors, Heading4 } from "../../global.styled";
import { motion } from "framer-motion";

export const Navbar = styled.nav<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-basis: 100%;
  padding-right: 10%;
  padding-left: 10%;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.shyBlack};
  min-height: 60px;
  align-items: center;
  background-color: ${colors.colorBlack100};
  position: fixed;
  top: 0px;
  width: 80%;
  z-index: 1;
  transition: 0.4s;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0;

    flex-direction: column;
    height: ${(props) => (props.isOpen ? "100px" : "60px")};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
`;

export const Title = styled(Heading4)`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled(motion.a)`
  display: flex;
  flex: 1;
  @media (max-width: 600px) {
    flex: 0;
    justify-content: start;
  }
`;
