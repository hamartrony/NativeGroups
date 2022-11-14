import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  sub: string;
};

export function Hight({ title, sub }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{sub}</SubTitle>
    </Container>
  );
}
