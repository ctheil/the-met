import { StyleSheet, Text, View } from "react-native";
import { red, white } from "./styles/typography";
import { Image } from "expo-image";
import logo from "../assets/images/identity__init--trans.svg";

const IntroScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainImage}>
        <Image
          source="https://www.metopera.org/globalassets/season/2022-23/traviata-la/1600x685/1600x685-traviata2.jpg"
          contentFit="cover"
          transition={1000}
          style={styles.image}
          contentPosition="center"
        />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={logo}
          transition={1000}
          placeholder="Identity"
          contentFit="contain"
        />
      </View>
      {/* <Text style={[styles.subHead, styles.heading]}>IL</Text>
      <Text style={[styles.heading, styles.mainHeading, styles.red]}>
        TROVATORE
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  mainImage: {
    flex: 1,
    width: "100%",
    height: 400,
    backgroundColor: red,
  },
  container: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 10,
  },
  image: {
    flex: 1,
    width: 500,
  },
  heading: {
    fontFamily: "AGBold",
    color: white,
  },
  mainHeading: {
    fontSize: 44.5,
    margin: 0,
  },
  subHead: {
    fontSize: 27.5,
    lineHeight: 0,
    margin: 0,
  },
  red: {
    color: red,
  },
});
export default IntroScreen;
