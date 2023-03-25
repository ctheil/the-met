import { StatusBar } from "expo-status-bar";
import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useRef, useState } from "react";
import Splashscreen from "./components/SplashScreen";
import IntroScreen from "./components/IntroScreen";
import { white } from "./components/styles/typography-styles";
import Typography, { Span } from "./components/Typography";
import { colors, padding } from "./components/styles/styles";
import TypeStyleGuide from "./components/TypeStyleGuide";
import Heading from "./components/layout/Heading";
import Container from "./components/layout/Container";
import { Menu, MenuItem } from "./components/menu/Menu";
import Synopsis from "./components/Synopsis";
import Fade from "./components/layout/Fade";
import Showings from "./components/Showings";
import Button from "./components/layout/Button";
import Cast from "./components/Cast";
import { Ionicons } from "@expo/vector-icons";
import Creators from "./components/Creators";

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

  const menuItems = [
    {
      index: 0,
      component: <Synopsis />,
      title: "Synopsis",
    },
    {
      index: 1,
      component: <Showings />,
      title: "Showings",
    },
    {
      index: 2,
      component: <Cast />,
      title: "Cast",
    },
    {
      index: 3,
      component: <Creators />,
      title: "Creators",
    },
    {
      index: 4,
      component: null,
      title: "Partners",
    },
  ];
  const [scrollPosition, setScrollPosition] = useState(null);
  // const height = useRef(new Animated.Value(50)).current;
  // const scrollY = useRef(new Animated.Value(0)).current;
  const [top, setTop] = useState(null);
  const [itemIsOpen, setItemIsOpen] = useState({ isItemsOpen: false, is: [] });
  const [openItem, setOpenItem] = useState(null);
  const [openItems, setOpenItems] = useState([]);
  const [close, setClose] = useState(false);
  const [scrollY, setScrollY] = useState(null);
  const ani = useRef(new Animated.Value(1000)).current;
  const aniTwo = useRef(new Animated.Value(0.95)).current;
  // const fadeOpacity = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.stagger(700, [
      Animated.timing(ani, {
        toValue: 0,
        delay: 250,
        duration: 800,
        // easing: Easing.out(),
        useNativeDriver: true,
      }),
      Animated.spring(aniTwo, {
        toValue: 1,
        delay: 250,
        duration: 200,
        easing: Easing.out(),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const height = 50;

  const handleScroll = (e) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    });
    setScrollY(e.nativeEvent.contentOffset.y);
    // Animated.event({
    //   nativeEvent: { contentOffset: { y: scrollY } },
    //   useNativeDriver: true,
    // });
  };
  const handlePress = (index, pressed) => {
    setClose(false);
    setOpenItems(pressed ? index : null);
    setItemIsOpen({ isItemsOpen: true });
    const items = new Set(openItems);
    items.has(index) ? items.delete(index) : items.add(index);
    // items.includes(index)
    setOpenItems([...items]);
  };
  const handleBackButton = () => {
    setClose(true);
    setOpenItems([]);
    setOpenItem(null);
  };

  const topEdge = top?.y - height + top?.height;

  return (
    <View onLayout={onLayoutRootView} style={[styles.container]}>
      <StatusBar style="light" />
      <Container
        aniTwo={aniTwo}
        ani={ani}
        scrollY={scrollY}
        handleScroll={handleScroll}
      >
        <Heading
          // style={{
          //   transform: [
          //     {
          //       translateY: scrollY.interpolate({
          //         inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
          //         outputRange: [0, 0, 0, 0, -1],
          //       }),
          //     },
          //   ],
          // }}
          setTop={setTop}
          height={height}
          scrollY={scrollY}
        />
        <Menu
          onOpen={(val) => {
            setOpenItem(val);
          }}
          open={openItem}
          menuItems={menuItems}
          handlePress={handlePress}
          close={close}
        >
          {/* <MenuItem
            close={close}
            handlePress={handlePress}
            component={<Synopsis />}
            index={0}
          >
            Synopsis
          </MenuItem>
          <MenuItem
            close={close}
            handlePress={handlePress}
            component={<Showings />}
            index={1}
          >
            Showings
          </MenuItem>
          <MenuItem
            close={close}
            handlePress={handlePress}
            component={<Cast />}
            index={2}
          >
            Cast
          </MenuItem>

          <MenuItem close={close} handlePress={handlePress} index={3}>
            Creators
          </MenuItem>
          <MenuItem close={close} handlePress={handlePress} index={4}>
            Partners
          </MenuItem> */}
        </Menu>
      </Container>
      <Fade />
      <View style={styles.fixedContainer}>
        {openItems.length > 0 && (
          <Button
            isItemsOpen={openItems.length > 0 ? true : false}
            onPress={handleBackButton}
            size="small"
          >
            <Ionicons
              // style={{ margin: 0, padding: 0 }}
              name="caret-back"
              size={18}
              color="white"
            />
          </Button>
        )}
        <Button isItemsOpen={openItems.length > 0 ? true : false}>
          Purchase Tickets
        </Button>
      </View>
    </View>
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
