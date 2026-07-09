import styled from "styled-components";

export const Background = styled.div`
  width: min(92%, 800px);
  max-width: 800px;
  padding: 10px 20px;
  border-radius: 24px;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.04),
      transparent 30%
    ),
    linear-gradient(135deg, #172340, #243764, #141d36);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    max-width: 400px;
    height: auto;
    display: block;
  }
`;
