import { Animated, StyleSheet, Text, View } from "react-native";
import { colors, padding } from "./styles/styles";
import Typography, { Span } from "./Typography";
import IMG from "../assets/images/Verdi-art.png";
import { Image } from "expo-image";
import { useEffect, useRef } from "react";

const addCreators = [
  { title: "PRODUCTION", name: "Michael Mayer" },
  { title: "SET DESIGNER", name: "Christine Jones" },
  { title: "COSTUME DESIGNER", name: "Susan Hilferty" },
  { title: "LIGHTING DESIGNER", name: "Kevin Adams" },
  { title: "CHOREOGRAPHER", name: "Lorin Latarro" },
];

const Creators = () => {
  const translate = useRef(new Animated.Value(-40)).current;
  const scale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(translate, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.heading,
          { transform: [{ translateY: translate }, { scale: scale }] },
        ]}
      >
        <Typography
          style={{ alignSelf: "flex-start" }}
          variant="p"
          color={colors.red}
        >
          Italian Composer
        </Typography>
        <Typography fontSize={45} variant="h1" color={colors.font}>
          Giuseppe Verdi
        </Typography>
        <Typography
          style={{ alignSelf: "flex-end" }}
          variant="p"
          color={colors.red}
        >
          1813-1901
        </Typography>
      </Animated.View>
      <Animated.View
        style={[
          styles.imageContainer,
          { transform: [{ translateY: translate }, { scale: scale }] },
        ]}
      >
        <Image transition={1000} source={IMG} width={500} height={700} />
      </Animated.View>
      <Typography
        style={{
          alignSelf: "flex-start",
          paddingHorizontal: padding.mainHorizontal / 2,
          marginTop: 6,
        }}
        variant="caption"
      >
        Image by Mirucle
      </Typography>
      <View style={styles.textContainer}>
        <Typography variant="p">
          <Span fontStyle="italics">
            In a remarkable career spanning six decades in the theater,
          </Span>
          <Span fontStyle="bold">Giuseppe Verdi</Span>
          (1813–1901) composed 26 operas, at least half of which are at the core
          of today’s repertoire.
        </Typography>
        <Typography variant="p">
          <Span fontStyle="bold">Francesco Maria Piave</Span> (1810–76) was
          Verdi’s librettist during his productive middle period and also worked
          with him on{" "}
          <Span fontStyle="italics">Ernani, Macbeth, Rigoletto,</Span>
          and <Span fontStyle="italics">La Forza del Destino</Span>, among
          others.{" "}
        </Typography>
        <Typography variant="p">
          <Span fontStyle="bold">Alexandre Dumas fils</Span> (1824–95) was the
          son of the author of{" "}
          <Span fontStyle="italics">The Three Musketeers.</Span>
        </Typography>
        <Typography variant="p">
          The play <Span fontStyle="italics">La Dame aux Camélias</Span> is
          based on his own semi-autobiographical novel of the same name.
        </Typography>
      </View>
      <View style={styles.additionalText}>
        {addCreators.map((creator, index) => (
          <View key={creator.name} style={styles.additionalTextContainer}>
            <Typography
              style={{ textTransform: "uppercase" }}
              fontSize={13}
              color={colors.grey}
              variant="h3"
            >
              {creator.title}
            </Typography>
            <Typography fontSize={21} variant="h2">
              {creator.name}
            </Typography>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24,
  },
  heading: {
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: -24,
  },
  textContainer: {
    marginTop: 24,
    paddingHorizontal: padding.mainHorizontal / 2,
    flexDirection: "column",
    gap: 24,
  },
  additionalText: {
    paddingHorizontal: padding.mainHorizontal / 2,
    marginTop: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  additionalTextContainer: {
    flexDirection: "column",
    marginTop: 24,
    gap: 6,
    width: "50%",
  },
});

export default Creators;
