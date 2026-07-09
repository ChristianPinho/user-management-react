import UsersImage from "../../assets/devclub.png";
import { Background } from "./styles";

function TopBackground() {

  return (
    <Background>
      <img src={UsersImage} alt="Usuários" />
    </Background>
  );
}

export default TopBackground;