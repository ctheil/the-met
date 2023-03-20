import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { grey, red, white } from "./styles/typography-styles";
import art from "../assets/images/trov-art.svg";

export default function EventScreenTwo() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.logoBox}>
          <Text>
            <Text style={[styles.logoGrey, styles.logoText]}>The </Text>
            <Text style={[styles.logoWhite, styles.logoText]}>Met</Text>
            <Text style={[styles.logoGrey, styles.logoText]}>ropolitan</Text>
            <Text style={[styles.logoWhite, styles.logoText]}> Opera</Text>
          </Text>
        </View>
        <View style={styles.headingBox}>
          {/* <Text style={styles.subHeading}>Giuseppe Verdi</Text> */}
          <Text style={styles.heading}>Giuseppe Verdi's</Text>
          <Text style={styles.heading}>Il Trovatore</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            style={styles.svgImage}
            source={art}
            transition={1000}
            placeholder="Art"
            contentFit="contain"
          />
        </View>
        <View style={styles.section}>
          <View style={styles.body}>
            <View style={styles.textWrapper}>
              <Text style={styles.timeline}>1. Synopsis</Text>

              <Text style={styles.p}>
                An extraordinary cast came together for the first Live in HD
                transmission of the Met’s 2015–16 season. Anna Netrebko is
                Leonora, the young noblewoman at the center of the story, who is
                in love with the troubadour of the title—tenor Yonghoon Lee—but
                also pursued by Count di Luna, sung by the great Dmitri
                Hvorostovsky. Dolora Zajick completes the quartet of principals
                in her signature role of Azucena, the mysterious Gypsy woman who
                sets the dramatic events in motion. Marco Armiliato conducts
                David McVicar’s Goya-inspired production.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 20,
  },
  logoBox: {
    // flex: 1,
    // alignSelf: "flex-start",
    // justifyContent: "center",
    // width: 800,
    // backgroundColor: red,
  },
  logoText: {
    fontFamily: "AGBold",
    fontSize: 17,
    color: red,
  },
  logoWhite: {
    color: white,
  },
  logoGrey: {
    color: grey,
  },
  headingBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
    padding: 24,
  },
  subHeading: {
    color: red,
    fontSize: 17,
    fontFamily: "AGBook",
    margin: 0,
  },
  heading: {
    color: white,
    fontFamily: "AGBold",
    fontSize: 43.6,
    margin: 0,
    textAlign: "center",
    marginBottom: -24,
  },
  body: {
    padding: 24,
  },
  p: {
    fontFamily: "AGBook",
    fontSize: 12,
    color: white,
    lineHeight: 24,
    width: "80%",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 24,
    paddingLeft: 24,
    paddingRight: 24,
    overflow: "hidden",
  },
  timeline: {
    fontFamily: "AGBold",
    fontSize: 12,
    color: red,
  },
  imageBox: {
    flex: 1,
    backgroundColor: "#eee",
    // height: 56,
    alignContent: "center",
    justifyContent: "center",
  },
  svgImage: {
    flex: 1,
    width: 100,
  },
});
