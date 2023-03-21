import { useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";
import Typography from "../Typography";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Button = ({ children }) => {
  const translate = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;

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
      onPress={() => alert("Thank you for your purchase!")}
      style={[
        styles.button,
        { transform: [{ translateY: translate }, { scale: scale }] },
      ]}
    >
      <Typography variant="cta">{children}</Typography>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
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
