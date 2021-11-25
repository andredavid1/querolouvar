import styled from "styled-components";

export const Container = styled.div`
  main {
    min-height: 84vh;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    padding: 8px;
  }
`;
