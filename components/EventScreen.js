import { StatusBar } from "expo-status-bar";
import {
  Animated,
  Easing,
  LayoutAnimation,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./layout/Button";
import Container from "./layout/Container";
import Fade from "./layout/Fade";
import Heading from "./layout/Heading";
import { StatusBarContext } from "./lib/context";
import { Menu } from "./menu/Menu";
import Ionicons from "@expo/vector-icons/Ionicons";
import Synopsis from "./Synopsis";
import Showings from "./Showings";
import Cast from "./Cast";
import Creators from "./Creators";
import { useContext, useEffect, useRef, useState } from "react";
import { colors, padding } from "./styles/styles";
import { scrollPosition } from "./lib/scrollPosition";
import Partners from "./Partners";
import FontSizePicker from "./FontSizePicker";
import ScrollFlag from "./ScrollFlag";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Overview from "./Overview";
import { Span } from "./Typography";

const menuItems = [
  {
    index: 0,
    component: <Synopsis />,
    title: "Synopsis",
    variant: "dark",
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
    variant: "dark",
  },
  {
    index: 3,
    component: <Creators />,
    title: "Creators",
  },
  {
    index: 4,
    component: <Partners />,
    title: "Partners",
  },
];

const swipeLeft = () => {
  return (
    <View style={{ height: "100%" }}>
      <Text>Back?</Text>
    </View>
  );
};

const EventScreen = ({ date }) => {
  const { statusBar, setStatusBar, scrollY } = useContext(StatusBarContext);

  const [mountButton, setMountButton] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const [close, setClose] = useState(false);

  const ani = useRef(new Animated.Value(1000)).current;
  const aniTwo = useRef(new Animated.Value(0.95)).current;
  const scrollRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      Animated.stagger(700, [
        Animated.timing(ani, {
          toValue: 60,
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
    }, 200);
  }, []);
  console.log(scrollY);
  useEffect(() => {
    if (scrollY >= 640) {
      setMountButton(true);
    } else {
      setMountButton(false);
    }
  }, [scrollY]);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleBackButton = () => {
    toggleItem();
    setClose(true);
    setOpenItem(null);
  };

  const handlePress = (index, pressed) => {
    setStatusBar({ mode: statusBar.mode, index: index });
    setClose(false);
    setOpenItem(pressed ? index : null);
  };
  const onSwipe = () => {
    alert("swipe");
  };

  const toggleItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // setExpanded(!expanded)
  };

  return (
    <>
      <StatusBar style={scrollPosition(scrollY, openItem)} />
      <ScrollFlag handlePress={scrollToTop} index={openItem} />
      <Container ref={scrollRef} aniTwo={aniTwo} ani={ani}>
        <Heading />
        <Overview date={date} mountButton={mountButton} />
        {/* <Swipeable leftContent={swipeLeft}> */}
        <Menu
          onOpen={(val) => {
            setOpenItem(val);
          }}
          open={openItem}
          menuItems={menuItems}
          handlePress={handlePress}
          close={close}
          toggleItem={toggleItem}
        ></Menu>
        {/* </Swipeable> */}
        {/* <FontSizePicker /> */}
      </Container>
      <Fade />

      {mountButton && (
        <View style={styles.fixedContainer}>
          {openItem !== null && (
            <Button
              isItemsOpen={openItem !== null ? true : false}
              onPress={handleBackButton}
              size="small"
              fontSize={13}
            >
              <Ionicons name="caret-back" size={13} color="white" />
              Back
            </Button>
          )}
          <Button isItemsOpen={openItem !== null ? true : false}>
            Purchase Tickets
          </Button>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  spacer: {
    paddingBottom: 10,
  },
  headingBox: {
    marginLeft: -20,
  },
  fixedContainer: {
    position: "absolute",
    bottom: 10,
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

export default EventScreen;
