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
    left: 10.5,
    width: 30,
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
    borderLeftWidth: 15.15,
    borderLeftColor: colors.red,
    borderRightWidth: 15.15,
    borderRightColor: colors.red,
  },
});

export default Flag;
