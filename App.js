import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Splashscreen from "./components/SplashScreen";
import IntroScreen from "./components/IntroScreen";
import { white } from "./components/styles/typography";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Baskerville: require("./assets/fonts/LibreBaskerville-Regular.ttf"),
    AGBook: require("./assets/fonts/AVGARDN_2.ttf"),
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
      <SafeAreaView style={styles.logo}>
        {!fontsLoaded ? <Splashscreen /> : <IntroScreen />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 60,
  },
  subheader: {
    fontFamily: "Baskerville",
    fontSize: 29.97,
    color: white,
  },
  heading: {
    fontFamily: "Baskerville",
    fontSize: 48.5,
    color: white,
  },
  textGrey: {
    color: "#999",
    fontSize: 30,
    fontFamily: "Baskerville",
  },
  textBlack: {
    color: white,
    fontSize: 30,
    fontFamily: "Baskerville",
  },
  headingContainer: {
    padding: 1,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#091127",
    alignItems: "center",
    justifyContent: "center",
  },
});
