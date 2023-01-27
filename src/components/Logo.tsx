import { Heading1 } from "../global.styled";
import { BigLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <BigLogo
      transition={{ duration: 0.4 }}
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
    >
      <Heading1 style={{ marginTop: "10rem" }}>FRONTend</Heading1>
      <Heading1>DEVeloper</Heading1>
    </BigLogo>
  );
};

export default Logo;
