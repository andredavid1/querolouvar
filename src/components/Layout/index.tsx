import Footer from "components/Footer";
import Header from "components/Header";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { Container } from "./styles";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: NextPage<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
