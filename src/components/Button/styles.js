import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid #fff"};

  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d, #7f3841 100%)"
      : "transparent"};

  color: #fff;

  font-size: 16px;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;
  transition: background 0.3s, color 0.3s, opacity 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.theme === "primary"
        ? "linear-gradient(180deg, #fe7e5d, #7f3841 100%)"
        : "#fff"};

    color: ${(props) =>
      props.theme === "primary" ? "#fff" : "#000"};

    opacity: ${(props) => (props.theme === "primary" ? "0.8" : "1")};
  }

  &:active {
    background: ${(props) =>
      props.theme === "primary"
        ? "linear-gradient(180deg, #fe7e5d, #7f3841 100%)"
        : "#fff"};

    color: ${(props) =>
      props.theme === "primary" ? "#fff" : "#000"};

    opacity: ${(props) => (props.theme === "primary" ? "0.6" : "1")};
  }
`;
