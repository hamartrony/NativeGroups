import { TouchableOpacityProps } from "react-native";
import { Container, GroupCardIcon, TitleGroup } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <GroupCardIcon />
      <TitleGroup>{title}</TitleGroup>
    </Container>
  );
}
