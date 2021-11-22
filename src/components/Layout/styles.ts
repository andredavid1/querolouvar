import styled from "styled-components";

export const Container = styled.div`
  main {
    min-height: 84vh;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    padding: 8px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px;
      button {
        background: ${(props) => props.theme.colors.secondary};
        border: none;
        padding: 5px 10px;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
