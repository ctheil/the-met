import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Menu, MenuItem } from "./menu/Menu";
import { padding } from "./styles/styles";

const Showings = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(-300)).current;
  useEffect(() => {
    Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start();
    Animated.spring(height, { toValue: 0, useNativeDriver: true }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: progress, transform: [{ translateY: height }] },
      ]}
    >
      <Menu style={{ marginVertical: 24 }}>
        <MenuItem
          variant="sub"
          index={0}
          primary="MARCH 17th"
          secondary="7:00 PM"
        />
        <MenuItem
          variant="sub"
          index={1}
          primary="MARCH 18th"
          secondary="8:30 PM"
        />
      </Menu>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    paddingHorizontal: padding.mainHorizontal * 2,
  },
});

export default Showings;
