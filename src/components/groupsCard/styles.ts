import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 32px 24px;
  width: 380px;
  height: 96px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const TitleGroup = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: 20px;
`;

export const GroupCardIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: "fill",
}))``;
