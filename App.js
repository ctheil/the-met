import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Splashscreen from "./components/SplashScreen";
import IntroScreen from "./components/IntroScreen";
import { white } from "./components/styles/typography-styles";
import Typography, { Span } from "./components/Typography";
import { colors } from "./components/styles/styles";
import TypeStyleGuide from "./components/TypeStyleGuide";
import Heading from "./components/layout/Heading";
import Container from "./components/layout/Container";
import { Menu, MenuItem } from "./components/menu/Menu";
import Synopsis from "./components/Synopsis";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Baskerville: require("./assets/fonts/LibreBaskerville-Regular.ttf"),
    BaskBold: require("./assets/fonts/LibreBaskerville-Bold.ttf"),
    BaskItalics: require("./assets/fonts/LibreBaskerville-Italic.ttf"),
    // AGBook: "https://use.typekit.net/tsp2cgs.css",
    AGBook: require("./assets/fonts/AVGARDN_2.ttf"),
    AGMedium: require("./assets/fonts/ITC-Avant-Garde-Gothic-Std-Medium.otf"),
    AGItalics: require("./assets/fonts/AVGARDDO_2.ttf"),
    AGBold: require("./assets/fonts/AVGARDD_2.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="light" />
      <Container>
        <Heading />
        <Menu>
          <MenuItem component={<Synopsis />} index={0}>
            Synopsis
          </MenuItem>
          <MenuItem index={1}>Showings</MenuItem>
          <MenuItem index={2}>Cast</MenuItem>
          <MenuItem index={3}>Creators</MenuItem>
          <MenuItem index={4}>Partners</MenuItem>
        </Menu>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  headingBox: {
    marginLeft: -20,
  },
  main: {
    backgroundColor: colors.bg,
    width: "100%",
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 12,
    marginTop: 60,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#091127",
    alignItems: "center",
    justifyContent: "center",
  },
});
