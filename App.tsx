import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Loading } from "./src/components/loading";
import { Groups } from "./src/screens/groups";
import theme from "./src/theme";

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      {fontsLoad ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
