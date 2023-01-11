import Footer from "./Footer";
import Header from "./Header";
import { Content, Layout } from "./MainLayout.styled";

interface IChildren {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IChildren) => {
  return (
    <Layout id="start">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
