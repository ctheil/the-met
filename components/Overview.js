import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import overviewImage from "../assets/images/overview.png";
import Fade from "./layout/Fade";
import { colors, padding } from "./styles/styles";
import Typography, { Span } from "./Typography";
import { Ionicons } from "@expo/vector-icons";
import Button from "./layout/Button";

const attending = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1547212371-eb5e6a4b590c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1535320485706-44d43b919500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
];

const Overview = ({ mountButton }) => {
  const [selected, setSelected] = useState({
    bookMark: false,
    share: false,
    heart: false,
  });
  const iconSize = 24;

  const handlePress = (type) => {
    setSelected({ ...selected, [type]: !selected[type] });
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image
          transition={1000}
          source={overviewImage}
          height={600}
          width={"100%"}
          style={styles.image}
          contentPosition={{ top: 0, right: "10%" }}
        />
        <Fade variant="total" />
        <View style={styles.headingContainer}>
          <Typography
            style={{ marginBottom: 4 }}
            color={colors.bg}
            variant="h2"
            fontSize={24}
            weight="AGBook"
          >
            Experience the
          </Typography>
          <Typography
            style={{ margin: 0, padding: 0 }}
            color={colors.red}
            variant="h1"
            fontSize={36}
          >
            Passion, Intrigue, and Romance
          </Typography>
          <Typography
            fontSize={24}
            style={{ marginTop: 4 }}
            color={colors.bg}
            variant="h2"
            weight="AGBook"
          >
            of Verdi's Unforgettable Opera
          </Typography>
        </View>
      </View>
      <View style={styles.showingsContainer}>
        <Typography variant="p" color={colors.grey100}>
          <Span variant="p" fontStyle="bold">
            Next Showing:
          </Span>{" "}
          Friday March 17th. 7:00 PM
        </Typography>
      </View>
      <View style={styles.iconContainer}>
        {selected.bookMark ? (
          <Ionicons
            onPress={() => {
              handlePress("bookMark");
            }}
            name="ios-bookmark"
            size={iconSize}
            color={colors.red}
          />
        ) : (
          <Ionicons
            onPress={() => {
              handlePress("bookMark");
            }}
            name="ios-bookmark-outline"
            size={iconSize}
            color={colors.red}
          />
        )}
        {selected.heart ? (
          <Ionicons
            onPress={() => {
              handlePress("heart");
            }}
            name="heart-sharp"
            size={iconSize}
            color={colors.red}
          />
        ) : (
          <Ionicons
            onPress={() => {
              handlePress("heart");
            }}
            name="heart-outline"
            size={iconSize}
            color={colors.red}
          />
        )}
        <Ionicons
          onPress={() => {
            handlePress("share");
          }}
          name="ios-share-social"
          size={iconSize}
          color={colors.red}
        />
        <Ionicons
          onPress={() => {
            handlePress("share");
          }}
          name="location-sharp"
          size={iconSize}
          color={colors.red}
        />
      </View>
      <View style={styles.textContainer}>
        <Typography color={colors.bg} variant="p">
          <Span variant="p" fontStyle="bold">
            Immerse yourself in the captivating world of Giuseppe Verdi's "Il
            Trovatore,"
          </Span>
          a timeless tale of love, vengeance, and sacrifice that has enthralled
          audiences for generations. This sumptuous production at the Met Opera,
          featuring world-class talent and breathtaking visuals, promises a
          night of unforgettable entertainment for the discerning opera lover.
        </Typography>
        <Typography color={colors.bg} variant="p">
          Indulge in an evening of soaring arias, dramatic ensembles, and
          heart-wrenching emotion, as you witness this operatic gem in all its
          glory.
        </Typography>
      </View>
      <Typography
        style={{
          marginBottom: -24,
          marginTop: 12,
          paddingHorizontal: padding.mainHorizontal,
          textTransform: "uppercase",
        }}
        variant="caption"
        color={colors.red}
      >
        FRIENDS ATTENDING
      </Typography>
      <View style={styles.avatarsContainer}>
        {attending.map((item, index) => (
          <View key={index} style={styles.avatars}>
            <Image
              source={{
                uri: item.imageURL,
              }}
              width={"100%"}
              height={"100%"}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {!mountButton && <Button>Purchase Tickets</Button>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -padding.mainHorizontal,
    backgroundColor: "#000",
  },
  headingContainer: {
    paddingHorizontal: padding.mainHorizontal,
    paddingVertical: 16,
  },
  textContainer: {
    paddingHorizontal: padding.mainHorizontal,
    paddingVertical: 16,
    flexDirection: "column",
    gap: 16,
  },
  iconContainer: {
    // borderTopColor: "rgba(255, 255, 255, 0.2)",
    borderTopWidth: 1,
    // borderBottomColor: "rgba(255, 255, 255, 0.2)",
    borderBottomWidth: 1,
    // paddingHorizontal: padding.mainHorizontal,
    marginHorizontal: padding.mainHorizontal,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 24,
    // justifyContent: "space-between",
  },
  avatarsContainer: {
    paddingHorizontal: padding.mainHorizontal,
    flexDirection: "row",
    gap: -24,
    paddingVertical: 24,
    marginLeft: -10,
  },
  avatars: {
    borderColor: "#000",
    borderWidth: 10,
    width: 85,
    height: 85,
    borderRadius: "50%",
    overflow: "hidden",
  },
  showingsContainer: {
    paddingHorizontal: padding.mainHorizontal,
    paddingTop: 8,
    paddingBottom: 16,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: padding.mainHorizontal,
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    height: 87,
    position: "relative",
  },
});

export default Overview;
