import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Splashscreen = ({ font }) => {
  // const [fontsLoaded] = useFonts({
  //   Baskerville: require("../assets/fonts/LibreBaskerville-Regular.ttf"),
  // });
  return (
    <View>
      <Text>
        <Text style={styles.textGrey}>The </Text>
        <Text style={styles.textBlack}>Met</Text>
      </Text>
      <Text>
        <Text style={styles.textGrey}>ropolitan</Text>
      </Text>
      <Text>
        <Text style={styles.textBlack}>Opera</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 60,
  },
  subheader: {
    fontFamily: "Baskerville",
    fontSize: 29.97,
    color: "#eee",
  },
  heading: {
    fontFamily: "Baskerville",
    fontSize: 48.5,
    color: "#eee",
  },
  textGrey: {
    color: "#999",
    fontSize: 30,
    fontFamily: "Baskerville",
  },
  textBlack: {
    color: "#eee",
    fontSize: 30,
    fontFamily: "Baskerville",
  },
  headingContainer: {
    padding: 1,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Splashscreen;
