import type { NextPage } from "next";
import Link from "next/link";
import {
  Brand,
  Container,
  ContainerMenu,
  Menu,
  NavBar,
  NavItem,
  NavLink,
  ToggleContainer,
} from "./styles";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

interface IHeaderProps {
  toggleTheme(): void;
}

const Header: NextPage<IHeaderProps> = ({ toggleTheme }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Brand>
        <Link href="/" passHref>
          QueroLouvar
        </Link>
      </Brand>
      <NavBar isOpen={menuIsOpen}>
        <Menu>
          <NavItem>
            <Link href="/cidades" passHref>
              <NavLink>Cidades</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/segmentos" passHref>
              <NavLink>Segmentos</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/igrejas" passHref>
              <NavLink>Igrejas</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <ToggleContainer>
              <button type="button" onClick={toggleTheme}>
                {title === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </ToggleContainer>
          </NavItem>
        </Menu>
      </NavBar>
      <ContainerMenu>
        <button type="button" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <FiMenu />
        </button>
      </ContainerMenu>
    </Container>
  );
};

export default Header;
