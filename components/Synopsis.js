import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { colors, padding } from "./styles/styles";
import Typography, { Span } from "./Typography";
import imageOne from "../assets/images/Group_Swords_Trovatore_2271-s.jpg";

const Synopsis = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={[styles.altFont, { alignSelf: "flex-start" }]}>Verdi</Text>
        <Typography fontSize={45} variant="h1" color={colors.font}>
          Act 1: The Duel
        </Typography>
        <Text style={[styles.altFont, { alignSelf: "flex-end" }]}>
          Cammarano
        </Text>
      </View>
      <View style={styles.imageBox}>
        <Image source={imageOne} width={"100%"} height={900} />
        <View style={styles.caption}>
          <Typography variant="caption">
            Yonghoon Lee as Manrico at the Met: Il Trovatore (2016).
          </Typography>
          <Typography variant="caption">
            Photo: Marty Sohl/Metropolitan Opera.
          </Typography>
        </View>
      </View>
      <View style={styles.p}>
        <Typography variant="p">
          <Span variant="p" fontStyle="bold">
            Spain, early 19th century, during the Peninsular War.
          </Span>
          The commander of the Royalist Aragon troops, Count di Luna, is
          obsessed with Leonora, a young noblewoman in the queen’s service, who
          does not return his love.
        </Typography>
        <Typography variant="p">
          Outside the royal residence, his soldiers keep watch at night. They
          have heard an unknown troubadour serenading Leonora, and the jealous
          count is determined to capture and punish him.{" "}
        </Typography>
        <Typography variant="p">
          To keep his troops awake, the captain, Ferrando, recounts the terrible
          story of a gypsy woman who was burned at the stake years ago for
          bewitching the count’s infant brother. The gypsy’s daughter then took
          revenge by kidnapping the boy and throwing him into the flames where
          her mother had died.
        </Typography>
        <Typography variant="p">
          {" "}
          The charred skeleton of a baby was discovered there, and di Luna’s
          father died of grief soon after. The gypsy’s daughter disappeared
          without a trace, but di Luna has sworn to find her.
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.mainHorizontal,
  },
  altFont: {
    fontFamily: "AGMedium",
    color: colors.red,
    fontSize: 17,
    marginBottom: -10,
    marginTop: -5,
  },
  heading: {
    flexDirection: "column",
    paddingVertical: 16,
  },
  imageBox: {
    // paddingHorizontal: -padding.mainHorizontal,
    marginHorizontal: -100,
    marginBottom: 36,
  },
  caption: {
    marginTop: 8,
    marginHorizontal: padding.mainHorizontal,
    paddingHorizontal: 36,
  },
  p: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 24,
    marginBottom: 24,
  },
});

export default Synopsis;
