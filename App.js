import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { FontProvider, StatusBarProvider } from "./components/lib/context";
import EventScreen from "./components/EventScreen";
import splash from "./assets/images/public/splash.png";
import { Span } from "./components/Typography";
import { colors } from "./components/styles/styles";

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

  const date = Date.now() + 200000;

  return (
    <ImageBackground
      source={splash}
      onLayout={onLayoutRootView}
      style={[styles.container]}
    >
      <StatusBarProvider>
        <FontProvider>
          <EventScreen date={date} />
        </FontProvider>
      </StatusBarProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091127",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "relative",
  },
});
