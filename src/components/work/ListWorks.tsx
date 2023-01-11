import { Heading1 } from "../../global.styled";
import { Heading1Container, SectionContainer } from "../about/About.styled";
import Work from "./Work";

const ListOfWorks = [
  {
    title: "Autumn Shop",
    description:
      "The App was created during inner coroporate React Academy event dedicated for interns and fresh people.",
    tasks: [
      "Design creation using Figma",
      "Implementation using React with Typescript",
      "Testing using Jest",
      "Authentication and data management using Firebase Firestore",
      "Styling with Material UI self implemented theme",
      "State management using Context Provider as wrapper for the App",
    ],
    photo: "/url/to/photo",
    figma: "url",
    github: "url",
  },
];

const ListWorks = () => {
  return (
    <SectionContainer id="work">
      <Heading1Container>
        <Heading1>Works</Heading1>
      </Heading1Container>
      {ListOfWorks.map((work) => (
        <Work work={work}></Work>
      ))}
    </SectionContainer>
  );
};

export default ListWorks;
