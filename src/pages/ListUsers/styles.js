import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: clamp(28px, 5vw, 38px);
  font-weight: 700;
  margin-top: 30px;
`;

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 380px));
    gap: 20px;
    margin: 40px 0;
    justify-content: center;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 380px;
    width: 100%;

    h3{
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
        text-transform: capitalize;
    }

    p{
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`;

export const TrashIcon = styled.img`
    cursor: pointer;
    margin-left: auto;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const AvatarUser = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;
