// component that displays the partners/sponsors for the event

// import { Image } from "expo-image";
import { Image, Animated, Easing, StyleSheet, View } from "react-native";
import { padding } from "./styles/styles";

// IMAGE IMPORTS
import bloom from "../assets/images/spons/Bloomberg.png";
import neubaur from "../assets/images/spons/Neubauer.png";
import toll from "../assets/images/spons/toll-brothers.png";
import trespa from "../assets/images/spons/trespa.svg";
import mont from "../assets/images/spons/montverdi.png";
import boa from "../assets/images/spons/Bank-of-America.png";
import viking from "../assets/images/spons/Viking_Cruises.png";
import rolex from "../assets/images/spons/rolex.png";
import yamaha from "../assets/images/spons/Yamaha.png";
import { useEffect, useRef, useState } from "react";

const spons = [
  { name: "bloomberg", logo: bloom, priority: "high" },
  { name: "neubaur", logo: neubaur, priority: "low" },
  { name: "toll brothers", logo: toll, priority: "low" },
];

const Partners = () => {
  const o1 = useRef(new Animated.Value(0)).current;
  const o2 = useRef(new Animated.Value(0)).current;
  const o3 = useRef(new Animated.Value(0)).current;
  const o4 = useRef(new Animated.Value(0)).current;
  const o5 = useRef(new Animated.Value(0)).current;
  const o6 = useRef(new Animated.Value(0)).current;
  const o7 = useRef(new Animated.Value(0)).current;
  const o8 = useRef(new Animated.Value(0)).current;
  const o9 = useRef(new Animated.Value(0)).current;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    Animated.stagger(250, [
      Animated.spring(o1, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.high}>
        <Image
          contentFit="contain"
          // transition={1000}
          transition={{ duration: 1000 }}
          source={bloom}
          style={[styles.image, { marginTop: -24 }]}
        />
      </View>
      <View style={styles.low}>
        <Image
          onLayout={(e) => {
            if (e.nativeEvent.layout.height > 0) {
              setIsMounted(true);
            }
          }}
          contentFit="contain"
          transition={{ duration: 1000 }}
          source={neubaur}
          style={[styles.image]}
        />
        <Image
          contentFit="contain"
          transition={{ duration: 1000 }}
          source={toll}
          style={[styles.image]}
        />
      </View>
      <View style={styles.low}>
        <Image
          contentFit="contain"
          transition={{ duration: 1000, delay: 750 }}
          source={trespa}
          style={[styles.image, { marginTop: -48 }]}
        />
        <Image
          contentFit="contain"
          transition={1000}
          source={mont}
          style={[styles.image, { marginTop: -48 }]}
        />
      </View>
      <View style={[styles.low, { marginTop: -24 }]}>
        <Image
          contentFit="contain"
          transition={1000}
          source={boa}
          style={[styles.image, { marginTop: -24 }]}
        />
        <Image
          contentFit="contain"
          transition={1000}
          source={viking}
          style={[styles.image, { flex: 0.6, marginTop: -24 }]}
        />
      </View>
      <View style={styles.low}>
        <Image
          contentFit="contain"
          transition={1000}
          source={rolex}
          style={[styles.image, { marginTop: -48 }]}
        />
        <Image
          contentFit="contain"
          transition={1000}
          source={yamaha}
          style={[styles.image, { marginTop: -24 }]}
        />
      </View>
      {/* <Image
        contentFit="contain"
        transition={1000}
        source={bloom}
        style={[styles.image, { flex: 1 }]}
      /> */}
      {/* {spons.map((spon) => (
          <View
            key={spon.name}
            style={[
              styles[spon.priority],
              { flex: spon.priority === "high" ? 1 : 0.4 },
            ]}
          >
            <Image
              style={[styles.image, { flex: spon.priority === "high" ? 1 : 1 }]}
              source={spon.logo}
              transition={500}
              contentFit="contain"
            />
          </View>
        ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  // main: {
  //   // flex: 1,
  //   backgroundColor: "green",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flex: 1,
  //   height: 200,
  // },
  container: {
    flexDirection: "column",
    // flexWrap: "wrap",
    marginTop: 48,
    gap: 12,
    height: 500,
    // flex: 1,
    // width: "100%",
    // alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: padding.mainHorizontal,
    // backgroundColor: "blue",
  },
  high: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // flexWrap: "wrap",
    // backgroundColor: "red",
    // width: 100,
    // height: 100,
  },
  low: {
    // backgroundColor: "purple",
    flex: 1,
    flexDirection: "row",
    gap: 24,
    // alignItems: "center",
    // justifyContent: "center",
    // lexWrap: "wrap",
  },
  image: {
    flex: 1,
    // height: 100,

    // width: null,
    // height: null,
  },
});

export default Partners;
