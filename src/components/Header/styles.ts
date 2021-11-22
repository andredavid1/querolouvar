import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  background-color: ${(props) => props.theme.colors.primary};
  grid-template-areas:
    "logo btnMenu"
    "menu menu";
`;

export const Brand = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px 0 16px 10px;
  transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;

  a {
    color: ${(props) => props.theme.colors.text};
    font-family: "Quicksand", sans-serif;
    font-size: x-large;
    font-weight: bold;
    transition: all 0.2s ease-in;
  }
`;

interface INavBarProps {
  isOpen: boolean;
}

export const NavBar = styled.nav<INavBarProps>`
  grid-area: menu;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.title === "dark"
      ? lighten(0.02, props.theme.colors.primary)
      : darken(0.02, props.theme.colors.primary)};
`;

export const Menu = styled.ul`
  list-style: none;
  width: 100%;
`;

export const NavItem = styled.li`
  text-align: center;
`;

export const NavLink = styled.a`
  width: 100%;
  display: block;
  color: ${(props) => props.theme.colors.text};
  padding: 5px 0;
  transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;

  &:hover {
    background: ${(props) =>
      props.theme.title === "dark"
        ? lighten(0.04, props.theme.colors.primary)
        : darken(0.04, props.theme.colors.primary)};
  }
`;

export const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 100%;
    background: none;
    border: none;
    padding: 5px 0;
    transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;

    &:hover {
      background: ${(props) =>
        props.theme.title === "dark"
          ? lighten(0.04, props.theme.colors.primary)
          : darken(0.04, props.theme.colors.primary)};
    }

    svg {
      font-size: large;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const ContainerMenu = styled.div`
  grid-area: btnMenu;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 10px 16px 0;

  button {
    background: none;
    border: none;

    svg {
      display: flex;
      font-size: x-large;
      color: ${(props) => props.theme.colors.text};
      transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
