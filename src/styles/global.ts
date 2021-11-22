import { createGlobalStyle } from "styled-components";
import Poppins from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import Roboto from "../assets/fonts/Roboto-Regular.ttf";
import Quicksand from "../assets/fonts/Quicksand-VariableFont_wght.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins});
  }

  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsSemiBold});
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }

  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
