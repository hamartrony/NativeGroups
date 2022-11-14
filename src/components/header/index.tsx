import logoImg from "../../../assets/logo.png";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type Props = {
  showBackBt?: boolean;
};

export function Header({ showBackBt = false }: Props) {
  return (
    <Container>
      {showBackBt && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
