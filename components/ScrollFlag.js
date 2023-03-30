import { useContext, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBarContext } from "./lib/context";
import { colors } from "./styles/styles";
import Typography from "./Typography";
import { Ionicons } from "@expo/vector-icons";

const textKeys = {
  null: "Overview",
  0: "Synopsis",
  1: "Showings",
  2: "Cast",
  3: "Creators",
  4: "Partners",
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ScrollFlag = ({ index, handlePress }) => {
  const { scrollY } = useContext(StatusBarContext);
  const [open, setOpen] = useState(false);
  const translate = useRef(new Animated.Value(-200)).current;
  const [flag, setFlag] = useState(index);
  const [close, setClose] = useState(false);

  console.log(flag, open);
  useEffect(() => {
    if (scrollY >= 68 && scrollY <= 1033 && !close) {
      setFlag(null);
      setOpen(true);
    } else if (
      (scrollY >= 1520 && index === 0) ||
      (scrollY >= 1583 && index === 1) ||
      (scrollY >= 1664 && index === 2) ||
      (scrollY >= 1701 && index === 3 && !close)
    ) {
      setFlag(index);
      setOpen(true);
    } else {
      setOpen(false);
    }
    if (close) {
      setTimeout(() => {
        setClose(false);
      }, 500);
    }
  }, [scrollY]);

  useEffect(() => {
    if (open) {
      Animated.spring(translate, {
        toValue: -20,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(translate, {
        toValue: -200,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [open]);

  return (
    <AnimatedTouchable
      onPress={() => {
        handlePress();
        setOpen(false);
        setClose(true);
      }}
      style={[styles.container, { transform: [{ translateX: translate }] }]}
    >
      <Typography style={{ letterSpacing: 1.2 }} variant="h3" color="white">
        <Ionicons name="caret-up" size={21} color={colors.bg} />
        {textKeys[flag]}
      </Typography>
      <View style={styles.flagBottom} />
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    // width: 50,
    position: "absolute",
    top: 70,
    left: 0,
    backgroundColor: colors.red,
    zIndex: 100,
    paddingHorizontal: 16,
    paddingLeft: 44,
    paddingVertical: 4,
  },
  // flagTop: {
  //   width: 110,
  //   height: 56,
  //   backgroundColor: colors.red,
  // },
  flagBottom: {
    position: "absolute",
    // top: 0,
    bottom: 0,
    right: -9,
    // left: 0,
    // width: 0,
    // height: 0,
    // width: 0,
    // height: "100%",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderTopWidth: 16.7,
    borderTopColor: colors.red,
    borderBottomWidth: 16.7,
    borderBottomColor: colors.red,
  },
});

export default ScrollFlag;
