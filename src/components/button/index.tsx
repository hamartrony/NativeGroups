import { TouchableOpacityProps } from "react-native";
import { ButtonTypes, Container, Title } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypes;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
