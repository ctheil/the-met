import Typography from "../Typography";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Animated, StyleSheet, View } from "react-native";
import { colors, padding } from "../styles/styles";
import { useContext, useState } from "react";
import { StatusBarContext } from "../lib/context";
import Flag from "../Flag";

const Heading = (props) => {
  const { scrollY } = useContext(StatusBarContext);
  const [open, setOpen] = useState(false);
  return (
    <Animated.View
      style={[styles.headingBox, { height: props.height }, props.style]}
    >
      <View style={{ alignItems: "center", flexDirection: "row", zIndex: 10 }}>
        <Typography color={colors.bg} style={{ zIndex: 10 }} variant="h1">
          il{" "}
        </Typography>
        <Typography variant="h1">trovatore</Typography>
      </View>
      <Ionicons name="close" size={40} color={colors.red} />
      <Flag />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headingBox: {
    marginHorizontal: -padding.mainHorizontal,
    paddingHorizontal: 16,
    paddingBottom: 8,
    // flex: 1,
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderBottomColor: "#000",
    borderBottomWidth: 4,
    backgroundColor: colors.bg,
    // height: 60,
    zIndex: 1,
  },
});
export default Heading;
