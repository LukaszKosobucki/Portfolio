import styled from "styled-components";
import { colors, Heading4 } from "../../global.styled";
import { motion } from "framer-motion";

export const Navbar = styled.nav`
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
  top: 0;
  width: 80%;
  z-index: 1;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
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
