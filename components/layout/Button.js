import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";
import Typography from "../Typography";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Button = ({ children, size, onPress, isItemsOpen, fontSize }) => {
  const translate = useRef(
    new Animated.Value(size === "small" ? 20 : 100)
  ).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (size === "small") {
      Animated.spring(translate, {
        toValue: 0,
        duration: 1500,
        easing: Easing.inOut(),
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => {
        Animated.spring(translate, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(),
          useNativeDriver: true,
        }).start();
      }, 1500);
    }
  }, []);

  const handlePress = () => {
    // if (size === "small") {
    //   const transition = Animated.spring(translate, {
    //     toValue: -150,
    //     duration: 200,
    //     useNativeDriver: true,
    //   }).start(() => {
    //   });
    // } else {
    //   Animated.spring(translate, {
    //     toValue: 0,
    //   });
    // }
    onPress ? onPress() : alert("Thank you for your purchase!");
  };

  const handlePressIn = (event) => {
    // console.log(event);
    Animated.timing(translate, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(scale, {
      toValue: 0.99,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <AnimatedTouchable
      onPressIn={handlePressIn}
      onPress={handlePress}
      style={[
        styles.button,
        {
          transform:
            size === "small"
              ? [{ translateX: translate }, { scale: scale }]
              : [{ translateY: translate }, { scale: scale }],
        },
        size === "small"
          ? {
              flex: 0.25,
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              // borderWidth: 2,
              // borderColor: colors.red,
              backgroundColor: colors.font,

              // color: colors.red,
            }
          : isItemsOpen
          ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
          : null,
      ]}
    >
      <Typography fontSize={fontSize} variant="cta">
        {children}
      </Typography>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: "100%",
    flex: 1,
    height: 55,
    alignItems: "center",
    backgroundColor: colors.red,
    // paddingHorizontal: 1,
    paddingVertical: 10,
    borderRadius: 6,
    zIndex: 11,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});

export default Button;
