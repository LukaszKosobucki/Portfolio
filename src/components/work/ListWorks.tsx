import { Heading1 } from "../../global.styled";
import { Heading1Container, SectionContainer } from "../about/About.styled";
import Work from "./Work";

const ListOfWorks = [
  {
    title: "Autumn Ecommerce Shop",
    description:
      "The App was created during inner coroporate React Academy event dedicated for interns and fresh people. It still contains some minor bugs and some inperfections but those are related to the extra features that i wanted to test on my own beside the requirements of the Academy tutor.",
    tasks: [
      "Design creation using Figma",
      "Implementation using React with Typescript",
      "Testing using Jest",
      "Authentication and data management using Firebase Firestore",
      "Styling with Material UI self implemented theme",
      "State management using Context Provider as wrapper for the App",
    ],
    photo: "autumn-shop.png",
    figma:
      "https://www.figma.com/file/sG8sLEm8TRDPOaNtRROnkB/14.10.2022-(deadline)---ecommerce-app?node-id=1%3A609&t=41p7pir20KFM0BxB-1",
    github: "https://github.com/LukaszKosobucki/Autumn-Shop",
    website: "https://www.jesieniara-ecommerce.lukaszkosobucki.pl",
  },
  {
    title: "Memory Game",
    description:
      "The game was made in free time as a project for fun. Since I love those types of games it was a breeze working on it. I'm definitely going to make more of memory like games. It was a challenging project mainly because of optimizaiton problems for mobile devices.",
    tasks: [
      "Designing the App from the ground using Figma",
      "Making schematics for the game logic before implementation using draw.io",
      "Implementation of the App using React with Typescript",
      "xState for state management",
      "Simple firestore database for leaderboard",
      "Styling with styled-components and framer/motion",
      "Support for mobile devices using media-queries",
      "Scanned the project using SonarCloud for further optimization",
    ],
    photo: "memory-game.png",
    figma: "https://github.com/LukaszKosobucki/MemoryGame",
    github: "https://github.com/LukaszKosobucki/MemoryGame",
    website: "https://www.memory-game.lukaszkosobucki.pl/",
    drawio:
      "https://drive.google.com/file/d/1UkLWMNZVk5mMxgXBPL2mOY2-14Rt98AK/view",
    sonarcloud:
      "https://sonarcloud.io/project/overview?id=LukaszKosobucki_MemoryGame",
  },
];

const ListWorks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <SectionContainer id="work">
      <Heading1Container
        transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <Heading1>Projects</Heading1>
      </Heading1Container>
      {ListOfWorks.map((work) => (
        <Work work={work} key={work.title}></Work>
      ))}
    </SectionContainer>
  );
};

export default ListWorks;
