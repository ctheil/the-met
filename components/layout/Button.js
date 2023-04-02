import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBarContext } from "../lib/context";
import { colors } from "../styles/styles";
import Typography from "../Typography";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Button = ({
  children,
  size,
  onPress,
  isItemsOpen,
  fontSize,
  variant,
}) => {
  const { scrollY } = useContext(StatusBarContext);
  const [trigger, setTrigger] = useState(false);
  const translate = useRef(
    new Animated.Value(size === "small" ? 20 : -20)
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
      }, 0);
    }
  }, []);
  const i = useRef(0);
  const buttonToggle = useCallback((ref) => {
    i.current++;
    console.log("fn called", i, ref);
    Animated.spring(translate, {
      toValue: ref ? 100 : 0,
      duration: 250,
      easing: Easing.inOut(),
      useNativeDriver: true,
    }).start();
  });

  const handlePress = () => {
    onPress ? onPress() : alert("Thank you for your purchase!");
  };
  const handleButtonOut = () => {
    Animated.spring(translate, {
      toValue: 100,
      duration: 1500,
      easing: Easing.inOut(),
      useNativeDriver: true,
    }).start();
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
        variant === "outlined"
          ? {
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: colors.red,
            }
          : null,
      ]}
    >
      <Typography
        color={variant === "outlined" ? colors.red : colors.bg}
        fontSize={fontSize && fontSize}
        variant="cta"
      >
        {children}
      </Typography>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 55,
    alignItems: "center",
    backgroundColor: colors.red,
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
