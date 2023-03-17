import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { red, white } from "./styles/typography";

const synopsis =
  "An extraordinary cast came together for the first Live in HD transmission of the Met’s 2015–16 season. Anna Netrebko is Leonora, the young noblewoman at the center of the story, who is in love with the troubadour of the title—tenor Yonghoon Lee—but also pursued by Count di Luna, sung by the great Dmitri Hvorostovsky. Dolora Zajick completes the quartet of principals in her signature role of Azucena, the mysterious Gypsy woman who sets the dramatic events in motion. Marco Armiliato conducts David McVicar’s Goya-inspired production.";

const EventScreen = () => {
  const [expand, setExpand] = useState(false);
  const elips = <Text style={styles.touchableElips}>...</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.eventsContainer}>
        <View style={styles.event}>
          <Text style={styles.day}>Wednesday</Text>
          <Text style={styles.time}>March 15th at 7 PM</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.cta}>Buy Tickets &rarr;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.event}>
          <Text style={styles.day}>Saturday</Text>
          <Text style={styles.time}>March 18th at 8:30 PM</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.cta}>Buy Tickets &rarr;</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headingBox}>
        <Text style={[styles.heading, styles.white]}>IL</Text>
        <Text style={[styles.red, styles.heading]}> TROVATORE</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setExpand(!expand);
        }}
        style={styles.pBox}
      >
        <Text style={styles.subHead}>Synopsis</Text>
        <Text style={styles.p}>
          {!expand ? synopsis.slice(0, 150) : synopsis}
          {!expand && elips}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    color: white,
    width: "100%",
    paddingTop: 24,
  },
  headingBox: {
    // flex: 1,
    padding: 24,
    paddingTop: 38,
    paddingBottom: 38,
    flexDirection: "row",
  },
  heading: {
    fontFamily: "AGBold",
    fontSize: 38,
  },
  pBox: {
    padding: 24,
  },
  p: {
    color: white,
    fontSize: 24,
    fontFamily: "Baskerville",
    lineHeight: 24,
  },
  subHead: {
    color: white,
    fontSize: 24,
    fontFamily: "AGBold",
    marginBottom: 18,
  },
  white: {
    color: white,
  },
  red: {
    color: red,
  },
  touchableElips: {
    color: red,
    fontSize: 18,
    fontFamily: "AGBold",
  },
  eventsContainer: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // justifyContent: "flex-start",
    alignContent: "flex-start",
    // gap: 24,
  },
  event: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },
  button: {
    backgroundColor: red,
    padding: 8,
    flexGrow: 0,
    borderRadius: 5,
  },
  day: {
    fontSize: 14,
    color: red,
    fontFamily: "AGBold",
    paddingBottom: 7,
    textTransform: "uppercase",
  },
  time: {
    fontSize: 24,
    color: white,
    fontFamily: "AGBook",
    paddingBottom: 11,
  },
  cta: {
    fontFamily: "AGBook",
    // textDecorationLine: "underline",
    color: white,
  },
});

export default EventScreen;
