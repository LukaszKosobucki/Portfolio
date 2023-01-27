import styled from "styled-components";
import { motion } from "framer-motion";

export const BigLogo = styled(motion.div)`
  background-image: url("logo_transparent.png");
  height: 600px;
  width: 600px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0 20vh 0;

  @media (max-width: 600px) {
    height: 290px;
    width: 290px;
  }
`;
