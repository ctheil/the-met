import { StyleSheet, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Fade = ({ style, variant }) => {
  return (
    // <View style={styles.fade}>
    <Animated.View style={[styles.container, style]}>
      <LinearGradient
        style={styles.fade}
        colors={
          variant && variant === "total"
            ? ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
            : ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
        }
      />
    </Animated.View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  fade: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 100,
    // backgroundColor: "#000",
  },
});
export default Fade;
