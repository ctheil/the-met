import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Flag from "../Flag";
import { StatusBarContext } from "../lib/context";
import { colors, padding } from "../styles/styles";

const Container = React.forwardRef(({ children, ani, aniTwo }, ref) => {
  const marTop = useRef(new Animated.Value(60)).current;
  // const [offset, setOffset] = useState(null);
  const offset = useRef(new Animated.Value(0)).current;
  const [isOffset, setIsOffset] = useState(false);

  const { scrollY, setScrollY } = useContext(StatusBarContext);

  useEffect(() => {
    setTimeout(() => {
      setIsOffset(true);
    }, 1500);
  }, []);

  const headerHeight = offset.interpolate({
    inputRange: [0, 60, 100], // start, max, clamp
    outputRange: [60, 0, 0], // start, end, clamp
  });

  const handleScroll = ({ nativeEvent }) => {
    setScrollY(nativeEvent.contentOffset.y);
    // setIsOffset(nativeEvent.contentOffset.y > 100 ? true : false);
    // console.log(isOffset);
    // return Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }], {
    //   useNativeDriver: true,
    // });
  };

  return (
    <Animated.ScrollView
      ref={ref}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: offset } } }],
        // {
        //   listener: (event) => {
        //     handleScroll(event);
        //   },
        // },
        {
          useNativeDriver: true,
          listener: (event) => {
            handleScroll(event);
          },
        }
      )}
      scrollEventThrottle={16}
      style={[
        styles.main,
        {
          transform: !isOffset
            ? [{ translateY: ani }, { scale: aniTwo }]
            : [
                {
                  translateY: headerHeight,
                },
              ],
        },
      ]}
    >
      <View style={{ position: "relative" }}>{children}</View>

      <View style={styles.spacer} />
    </Animated.ScrollView>
  );
});

const styles = StyleSheet.create({
  spacer: {
    paddingBottom: 150,
  },
  main: {
    backgroundColor: colors.bg,
    width: "100%",
    flex: 1,
    paddingHorizontal: padding.mainHorizontal,
    paddingTop: 12,
    borderRadius: 24,
    position: "relative",
  },
});

export default Container;
