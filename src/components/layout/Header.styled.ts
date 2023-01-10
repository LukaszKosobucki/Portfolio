import styled from "styled-components";
import { colors, Heading4 } from "../../global.styled";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-basis: 100%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.shyBlack};
  min-height: 60px;
  align-items: center;
  background-color: ${colors.shyGray};
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
`;

export const Title = styled(Heading4)`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const LogoContainer = styled.a`
  display: flex;
  flex: 1;
`;
