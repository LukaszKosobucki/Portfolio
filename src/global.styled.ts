import styled, { createGlobalStyle } from "styled-components";

export const typography = {
  fontSize: "16px",
  fontFamily: "Oxygen",
  paragraphBase: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "175%",
  },
  heading1: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: "60px",
  },
  heading3: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: "37px",
  },
  heading4: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: "30px",
  },
  heading5: {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "24px",
  },
};

export const colors = {
  shyGray: "#e8e8e8",
  shyBlue: "#364f6b",
  shyBlack: "#393939",
};

export const Heading1 = styled.h1`
  font-size: ${typography.heading1.fontSize};
  font-weight: ${typography.heading1.fontWeight};
  line-height: ${typography.heading1.lineHeight};
`;

export const Heading3 = styled.h3`
  font-size: ${typography.heading3.fontSize};
  font-weight: ${typography.heading3.fontWeight};
  line-height: ${typography.heading3.lineHeight};
`;
export const Heading4 = styled.h4`
  font-size: ${typography.heading4.fontSize};
  font-weight: ${typography.heading4.fontWeight};
  line-height: ${typography.heading4.lineHeight};
`;
export const Heading5 = styled.h5`
  font-size: ${typography.heading5.fontSize};
  font-weight: ${typography.heading5.fontWeight};
  line-height: ${typography.heading5.lineHeight};
`;
export const ParagraphBase = styled.p`
  font-size: ${typography.paragraphBase.fontSize};
  font-weight: ${typography.paragraphBase.fontWeight};
  line-height: ${typography.paragraphBase.lineHeight};
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        color: ${colors.shyBlack};
        font-family: ${typography.fontFamily};
        overflow-x: clip;
        background-color: ${colors.shyGray};
        font-size: 16px;
    }
    
    html {
        scroll-behavior: smooth;
    }

    #root {
        display: flex;
    }

    a:active, a:link,a:visited ,a:hover  {
        color: inherit;
        text-decoration: none;
    }
`;
