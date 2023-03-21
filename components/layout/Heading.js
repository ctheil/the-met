import Typography from "../Typography";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { colors, padding } from "../styles/styles";

const Heading = (props) => {
  return (
    <View style={styles.headingBox}>
      <Typography variant="h1">Il Trovatore</Typography>
      <Ionicons name="close" size={40} color={colors.red} />
    </View>
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
    borderBottomColor: colors.font,
    borderBottomWidth: 4,
    backgroundColor: colors.bg,
    zIndex: 1,
  },
});
export default Heading;
