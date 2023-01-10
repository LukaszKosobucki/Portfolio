import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MainLayout from "./components/layout/MainLayout";
import Logo from "./components/Logo";
import ListWorks from "./components/work/ListWorks";

function App() {
  return (
    <MainLayout>
      <Logo />
      <About />
      <ListWorks />
      <Contact />
    </MainLayout>
  );
}

export default App;
