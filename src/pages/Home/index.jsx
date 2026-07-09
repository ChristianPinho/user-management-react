import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  ContainerInputSingle,
  Input,
  InputLabel,
} from "./styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    try {
      await api.post("/usuarios", {
        name: inputName.current.value,
        age: Number(inputAge.current.value),
        email: inputEmail.current.value,
      });

      navigate("/users");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <ContainerInputSingle>
          <div>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input
              type="email"
              placeholder="E-mail do usuário"
              ref={inputEmail}
            />
          </div>
        </ContainerInputSingle>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button
        type="button"
        onClick={() => navigate("/users")}
        theme="secondary"
      >
        Ver Lista de Usuários
      </Button>
    </Container>
  );
}

export default Home;
