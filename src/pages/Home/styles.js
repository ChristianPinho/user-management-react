import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at top left,
      rgba(255, 126, 93, 0.08),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(75, 94, 170, 0.12),
      transparent 40%
    ),
    linear-gradient(135deg, #0f172a 0%, #161f38 45%, #111827 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px 20px;
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 560px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: clamp(34px, 5vw, 60px);
  font-weight: 700;
  letter-spacing: -1.5px;
  text-align: center;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerInputSingle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 75%;
  }

  @media (max-width: 600px) {
    div {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 14px;
  background: rgba(34, 44, 74, 0.9);
  border: 1px solid #3b4670;
  color: #fff;
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
  &::placeholder {
    color: #97a2c7;
  }

  &:focus {
    border-color: #ff7e5d;

    box-shadow: 0 0 0 4px rgba(255, 126, 93, 0.15);

    background: #263156;
  }
`;

export const InputLabel = styled.label`
  color: #f8fafc;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  span {
    color: #ff7e5d;
  }
`;
