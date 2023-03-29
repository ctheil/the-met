import { StyleSheet, View } from "react-native";
import { colors } from "./styles/styles";

const Flag = () => {
  return (
    <View style={styles.flag}>
      <View style={styles.flagTop} />
      <View style={styles.flagBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {
    position: "absolute",
    top: -12,
    left: 13,
    width: 25,
    marginRight: 15,
    height: 55,
    backgroundColor: colors.red,
  },
  flagTop: {
    width: 25,
    height: 15,
    backgroundColor: colors.red,
  },
  flagBottom: {
    position: "absolute",
    left: 0,
    bottom: -8,
    width: 0,
    height: 0,
    borderBottomWidth: 8,
    borderBottomColor: "transparent",
    borderLeftWidth: 12.5,
    borderLeftColor: colors.red,
    borderRightWidth: 12.5,
    borderRightColor: colors.red,
  },
});

export default Flag;
