import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: clamp(28px, 5vw, 38px);
  font-weight: 700;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
  transition: 0.3s;
  &:focus {
    border-color: #fe7e5d;
  }
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`;
