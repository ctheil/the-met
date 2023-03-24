import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { Menu, MenuItem } from "./menu/Menu";
import Showing from "./Showing";
import { padding } from "./styles/styles";

const Showings = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(-20)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const transition = useRef(new Animated.Value(-10)).current;
  const transitionTwo = useRef(new Animated.Value(-12)).current;

  useEffect(() => {
    Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start();
    Animated.spring(height, { toValue: 0, useNativeDriver: true }).start();

    Animated.spring(opacity, {
      toValue: 1,
      duration: 200,
      // delay: 20,
      useNativeDriver: true,
    }).start();
    Animated.stagger(200, [
      Animated.spring(transition, {
        toValue: 0,
        delay: 250,
        easing: Easing.out(),
        useNativeDriver: true,
      }),
      Animated.spring(transitionTwo, {
        easing: Easing.in(),
        toValue: 0,
        delay: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: progress, transform: [{ translateY: height }] },
      ]}
    >
      <Menu style={{ marginVertical: 24 }}>
        <Animated.View
          style={{
            opacity: opacity,
            transform: [{ translateX: transition }],
          }}
        >
          <MenuItem
            open={true}
            delay={true}
            // animation={{ opacity: opacity, transition: transition, delay: 20 }}
            variant="sub"
            index={0}
            primary="MARCH 17th"
            secondary="7:00 PM"
            component={<Showing />}
          />
        </Animated.View>

        <Animated.View
          style={{
            opacity: opacity,
            transform: [{ translateX: transitionTwo }],
          }}
        >
          <MenuItem
            // animation={{ opacity: opacity, transition: transition, delay: 30 }}
            variant="sub"
            index={1}
            primary="MARCH 18th"
            secondary="8:30 PM"
            component={<Showing variant={2} />}
          />
        </Animated.View>
      </Menu>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    paddingHorizontal: padding.mainHorizontal + padding.mainHorizontal / 2,
  },
});

export default Showings;
