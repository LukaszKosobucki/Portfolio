import { colors, Heading1, Heading4 } from "../global.styled";
import { BigLogo } from "./Logo.styled";

const Logo = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <BigLogo
      transition={{ duration: 0.4 }}
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
    >
      {isMobile ? (
        <>
          <Heading1 style={{ marginTop: "10rem", color: `${colors.shyBlue}` }}>
            FRONTend <br />
            DEVeloper
          </Heading1>
        </>
      ) : (
        <>
          <Heading4 style={{ marginTop: "4rem", color: `${colors.shyBlue}` }}>
            FRONTend <br />
            DEVeloper
          </Heading4>
        </>
      )}
    </BigLogo>
  );
};

export default Logo;
