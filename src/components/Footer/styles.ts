import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 6vh;
  background-color: ${(props) => props.theme.colors.primary};

  span {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-family: "Quicksand", sans-serif;
    font-size: small;
  }
`;
