import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Baskerville: require("./assets/LibreBaskerville-Regular.ttf"),
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
      <View style={styles.logo}>
        <Text>
          <Text style={styles.textGrey}>The </Text>
          <Text style={styles.textBlack}>Met</Text>
        </Text>
        <Text>
          <Text style={styles.textGrey}>ropolitan</Text>
        </Text>
        <Text>
          <Text style={styles.textBlack}>Opera</Text>
        </Text>
      </View>
      {/* <View style={styles.headerContainer}>
        <Text style={styles.subheader}>IL</Text>
        <Text style={styles.heading}>TROVATORE</Text>
      </View> */}
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
    color: "#eee",
  },
  heading: {
    fontFamily: "Baskerville",
    fontSize: 48.5,
    color: "#eee",
  },
  textGrey: {
    color: "#999",
    fontSize: 30,
    fontFamily: "Baskerville",
  },
  textBlack: {
    color: "#eee",
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
    backgroundColor: "#232323",
    alignItems: "center",
    justifyContent: "center",
  },
});
