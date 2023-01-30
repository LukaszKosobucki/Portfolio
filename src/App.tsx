import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MainLayout from "./components/layout/MainLayout";
import Logo from "./components/Logo";
import ListWorks from "./components/work/ListWorks";
import { GlobalStateProvider } from "./utils/ContextWrapper";

function App() {
  return (
    <GlobalStateProvider>
      <MainLayout>
        <Logo />
        <About />
        <ListWorks />
        <Contact />
      </MainLayout>
    </GlobalStateProvider>
  );
}

export default App;
