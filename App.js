import { StatusBar } from "expo-status-bar";
import { Animated, ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { colors, padding } from "./components/styles/styles";
import { StatusBarProvider } from "./components/lib/context";
import EventScreen from "./components/EventScreen";
import Typography from "./components/Typography";
import { Image } from "expo-image";
import splash from "./assets/images/public/splash.png";

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

  const [itemIsOpen, setItemIsOpen] = useState({ isItemsOpen: false, is: [] });
  const [openItem, setOpenItem] = useState(null);
  const [openItems, setOpenItems] = useState([]);
  const [close, setClose] = useState(false);
  const [scrollY, setScrollY] = useState(null);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = (index, pressed) => {
    setClose(false);
    setOpenItems(pressed ? index : null);
    setItemIsOpen({ isItemsOpen: true });
    const items = new Set(openItems);
    items.has(index) ? items.delete(index) : items.add(index);
    setOpenItems([...items]);
  };
  const handleBackButton = () => {
    setClose(true);
    setOpenItems([]);
    setOpenItem(null);
  };

  return (
    <ImageBackground
      source={splash}
      onLayout={onLayoutRootView}
      style={[styles.container]}
    >
      <StatusBarProvider>
        <EventScreen />
      </StatusBarProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  spacer: {
    paddingBottom: 10,
  },
  headingBox: {
    marginLeft: -20,
  },
  fixedContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 100,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: padding.mainHorizontal,
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
    zIndex: 1,
  },
});
