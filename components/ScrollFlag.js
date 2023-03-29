import { useContext, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBarContext } from "./lib/context";
import { colors } from "./styles/styles";
import Typography from "./Typography";

const textKeys = {
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

  useEffect(() => {
    if (
      (scrollY >= 140 && index === 0) ||
      (scrollY >= 206 && index === 1) ||
      (scrollY >= 261 && index === 2) ||
      (scrollY >= 245 && index === 3)
    ) {
      setOpen(true);
    } else {
      setOpen(false);
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
    // <View style={styles.main}>
    <AnimatedTouchable
      onPress={handlePress}
      style={[styles.container, { transform: [{ translateX: translate }] }]}
    >
      {/* <View style={styles.flagTop} /> */}
      <Typography style={{ letterSpacing: 1.2 }} variant="h3" color="white">
        {textKeys[index]}
      </Typography>
      <View style={styles.flagBottom} />
    </AnimatedTouchable>
    // </View>
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
    paddingLeft: 36,
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
    borderTopWidth: 16.8,
    borderTopColor: colors.red,
    borderBottomWidth: 16.8,
    borderBottomColor: colors.red,
  },
});

export default ScrollFlag;
