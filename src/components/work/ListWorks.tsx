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
    photo: "/autumn-shop.png",
    figma:
      "https://www.figma.com/file/vyLTghHNuWUfzdDht9uptf/Portfolio?node-id=0%3A1&t=vhoGsX5HWBUlMme2-1",
    github: "https://github.com/LukaszKosobucki/Autumn-Shop",
    website: "#",
  },
];

const ListWorks = () => {
  return (
    <SectionContainer id="work">
      <Heading1Container>
        <Heading1>Works</Heading1>
      </Heading1Container>
      {ListOfWorks.map((work) => (
        <Work work={work} key={work.title}></Work>
      ))}
    </SectionContainer>
  );
};

export default ListWorks;
