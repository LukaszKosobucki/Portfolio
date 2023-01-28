import { colors, Heading1, Heading4 } from "../global.styled";
import { GlobalStateContext } from "../utils/ContextWrapper";
import { BigLogo } from "./Logo.styled";
import { useContext } from "react";

const Logo = () => {
  const globalServices = useContext(GlobalStateContext);
  return (
    <BigLogo
      transition={{ duration: 0.4 }}
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
    >
      {globalServices.matches ? (
        <Heading4 style={{ marginTop: "4rem", color: `${colors.shyBlue}` }}>
          FRONTend <br />
          DEVeloper
        </Heading4>
      ) : (
        <Heading1 style={{ marginTop: "10rem", color: `${colors.shyBlue}` }}>
          FRONTend <br />
          DEVeloper
        </Heading1>
      )}
    </BigLogo>
  );
};

export default Logo;
