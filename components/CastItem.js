// import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";
import Typography from "./Typography";
import Fade from "./layout/Fade";
import { colors, padding } from "./styles/styles";

// CastItem component to display the cast members in the Cast component

const CastItem = ({ cast, index }) => {
  return (
    <View key={cast.name} style={[styles.item]}>
      <View style={[styles.avatar]}>
        <Image
          transition={{
            duration: 500,
            timing: "ease-in-out",
          }}
          source={{ uri: cast.imgPath }}
          width={500}
          height={700}
        />
        <LinearGradient
          style={styles.imgFade}
          colors={[
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0.75)",
            "rgba(0, 0, 0, 1)",
          ]}
        />
        {/* <Fade /> */}
      </View>
      <View style={styles.info}>
        <Typography textTransform="uppercase" variant="caption">
          {cast.role}
        </Typography>

        <Typography style={{ marginBottom: 6 }} color={colors.bg} variant="h2">
          {cast.name}
        </Typography>
        <Typography style={{ marginTop: 6 }} variant="caption">
          PERFORMING
        </Typography>
        <Typography color={colors.bg} variant="h3">
          {cast.performing}
        </Typography>
        <Typography
          color={colors.bg}
          style={{ marginTop: 24 }}
          variant="h1"
          fontSize={24}
        >
          {cast.heading}
        </Typography>
        <Typography
          style={{ marginTop: 12, marginBottom: 24 }}
          color={colors.bg}
          variant="caption"
        >
          {cast.subHead}
        </Typography>
        {cast.bio &&
          cast.bio.map((bio, index) => (
            <Typography
              style={index != 0 ? { paddingVertical: 12 } : null}
              color={colors.grey100}
              variant="p"
              key={index}
            >
              {bio}
            </Typography>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // flexDirection: "row",
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    paddingBottom: 24,
    overflow: "hidden",
    borderRadius: 24,
  },
  imgFade: {
    // width: "100%",
    height: 300,
    position: "absolute",

    bottom: 0,
    left: 0,
    right: 0,
  },
  avatar: {
    position: "relative",
    overflow: "hidden",
  },
  info: {
    paddingHorizontal: padding.mainHorizontal,
    paddingVertical: 12,
    // gap: 6,
    marginTop: -200,
  },
});

export default CastItem;
