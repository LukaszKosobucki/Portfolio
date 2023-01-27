import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MainLayout from "./components/layout/MainLayout";
import Logo from "./components/Logo";
import ListWorks from "./components/work/ListWorks";
import {
  GlobalStateContext,
  GlobalStateProvider,
} from "./utils/ContextWrapper";
import { useContext } from "react";

function App() {
  const globalServices = useContext(GlobalStateContext);
  return (
    <GlobalStateProvider>
      <MainLayout>
        <Logo isMobile={globalServices.matches} />
        <About isMobile={globalServices.matches} />
        <ListWorks isMobile={globalServices.matches} />
        <Contact isMobile={globalServices.matches} />
      </MainLayout>
    </GlobalStateProvider>
  );
}

export default App;
