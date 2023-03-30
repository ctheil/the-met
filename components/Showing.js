import { StyleSheet, Text, View } from "react-native";
import { colors, padding } from "./styles/styles";
import Typography from "./Typography";

const Showing = ({ variant }) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeline}>
        <View style={[styles.lineBox, styles.extended]}>
          <View style={styles.line} />
          <Text style={styles.text}>6:00 PM</Text>
          <View style={styles.point} />
          <Text style={styles.text}>House Opens</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.line} />
          <Text style={styles.text}>45 mins</Text>
          <View style={styles.point} />
          <Text style={styles.textBold}>Act I</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.line} />
          <Text style={styles.text}>25 mins</Text>
          <View style={styles.point} />
          <Text style={styles.text}>Intermission</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.line} />
          <Text style={styles.text}>20 mins</Text>
          <View style={styles.point} />
          <Text style={styles.textBold}>Act II</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.line} />
          <Text style={styles.text}>25 mins</Text>
          <View style={styles.point} />
          <Text style={styles.text}>Intermission</Text>
        </View>
        <View style={[styles.lineBox, styles.extended]}>
          <View style={styles.line} />
          <Text style={styles.text}>45 mins</Text>
          <View style={styles.point} />
          <Text style={styles.textBold}>Act III/IV</Text>
        </View>
        <View style={[styles.lineBox, styles.end]}>
          {/* <View style={styles.line} /> */}
          <Text style={styles.text}>9:30 PM</Text>
          <View style={styles.point} />
          <Text style={styles.text}>End</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <Text style={[styles.statHeading]}>Estimated Run Time</Text>
        <Text style={[styles.statText]}>3.5 Hrs</Text>
        <Text style={[styles.statHeading]}>Sung In</Text>
        <Text style={[styles.statText]}>Italian</Text>
        <Text style={[styles.statHeading]}>MET TITLE IN</Text>
        <Text style={[styles.statText]}>English</Text>
        <Text style={[styles.statText]}>Spanish</Text>
        <Text style={[styles.statText]}>German</Text>
      </View>
      <View style={styles.cta}>
        <View style={styles.headingBox}>
          <Text style={[styles.headingAlt]}>
            {variant === 2 ? "Saturday" : "Friday"}
          </Text>
          <Typography fontSize={34} color={colors.font} variant="h1">
            {`MARCH ${variant === 2 ? "18" : "17"}th`}
          </Typography>
          <Text style={[styles.headingAlt, { alignSelf: "flex-end" }]}>
            {variant === 2 ? "8:30 PM" : "7:00 PM"}
          </Text>
        </View>
        <View style={styles.ctaText}>
          <Text style={styles.price}>{`from $${
            variant === 2 ? "43.50" : "87.50"
          }`}</Text>
          <Text style={styles.disclaimer}>Price includes $3.50 fee</Text>
        </View>
      </View>
    </View>
  );
};

const WIDTH = 12;

const styles = StyleSheet.create({
  price: {
    fontFamily: "BaskItalics",
    fontSize: 34,
  },
  ctaText: {
    paddingVertical: 24,
    // width: "100%",
    overflow: "visible",
    alignItems: "center",
  },
  disclaimer: {
    fontFamily: "AGBook",
    fontSize: 13,
    alignSelf: "flex-end",
  },
  cta: {
    width: "100%",
    alignItems: "center",
  },
  headingBox: {
    // flexGrow: 1,
    flexDirection: "column",
    // width: "100%",
    // alignItems: "center",
  },
  headingAlt: {
    fontFamily: "AGBook",
    fontSize: 21,
    color: colors.red,
    marginBottom: -6,
  },
  stats: {
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    flex: 0.5,
    flexGrow: 0.5,
    marginLeft: 70,
  },
  statText: {
    fontFamily: "AGBold",
    color: colors.font,
    fontSize: 13,
    textTransform: "uppercase",
  },
  statHeading: {
    fontFamily: "AGBook",
    letterSpacing: 0.5,
    fontSize: 13,
    color: colors.font,
    textTransform: "uppercase",
  },
  container: {
    // paddingHorizontal: 30,
    paddingVertical: 24,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 13,
    // alignItems: "center",

    width: "100%",
    flexWrap: "wrap",
  },
  point: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    backgroundColor: colors.red,
    justifySelf: "center",

    // position: "absolute",
    // top: 0,
    // left: 0,
    // transform: [{ translateX: -WIDTH }],
  },
  timeline: {
    position: "relative",
    flexDirection: "column",
    flex: 0.5,
    flexGrow: 0.5,
    // gap: 24,
  },
  text: {
    marginTop: -6,
    fontFamily: "AGBook",
    minWidth: 50,
    color: colors.font,
    fontSize: 13,
  },
  textBold: {
    marginTop: -6,
    fontFamily: "AGBold",
    minWidth: 50,
    color: colors.font,
    fontSize: 13,
  },
  line: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 1,

    left: "50%",
    transform: [{ translateX: 1 }],
    backgroundColor: colors.red,
  },
  lineBox: {
    // width: 4,
    height: 35,
    // backgroundColor: colors.red,
    borderRadius: 20,
    flexDirection: "row",
    gap: 16,
    // flex: 0.5,
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  extended: {
    height: 45,
  },
});

export default Showing;
