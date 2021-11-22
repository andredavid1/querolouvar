import type { NextPage } from "next";
import { ReactNode } from "react";
import { Container } from "./styles";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: NextPage<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
