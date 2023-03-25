import { useRef } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { colors, padding } from "../styles/styles";

const Container = ({ children, handleScroll, scrollY, ani, aniTwo }) => {
  const marTop = useRef(new Animated.Value(60)).current;

  // handleScroll = (e) => {
  //   Animated.timing(marTop, {
  //     toValue: 0,
  //     duration: 100,
  //     useNativeDriver: true,
  //   }).start();
  // };

  return (
    <Animated.ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      // fadingEdgeLength={1}
      // translateY: scrollY.interpolate({
      //         inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
      //         outputRange: [0, 0, 0, 0, -1],
      //       }),
      style={[
        styles.main,
        ,
        { transform: [{ translateY: ani }, { scale: aniTwo }] },
        // {
        //   marginTop: scrollY
        //     ? marTop.interpolate({
        //         inputRange: [0, scrollY < 0 ? 0 : scrollY + 60],
        //         outputRange: [0, 60],
        //       })
        //     : 60,
        // },
      ]}
      // invertStickyHeaders={true}
      // StickyHeaderComponent={<Fade />}
      // stickyHeaderIndices={[0]}
    >
      {/* <SafeAreaView> */}
      <View>{children}</View>

      <View style={styles.spacer} />

      {/* </SafeAreaView> */}
    </Animated.ScrollView>
  );
};

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
    marginTop: 60,
    borderRadius: 24,
  },
});

export default Container;
